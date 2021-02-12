from flask import *
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, current_user, logout_user, login_required

import sqlite3
import os
from datetime import datetime

from flask_wtf import FlaskForm
from flask_login import current_user
from flask_wtf.file import FileField, FileAllowed
from wtforms import BooleanField, StringField, PasswordField, validators, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError

link_db = "./links.db"
db_done = "./done.db"
db_mat = "./mat_pricing.db"
form_data = "./form_data.db"
app = Flask(__name__)       #Define the flask app thing
bootstrap = Bootstrap(app)

app.config['SECRET_KEY'] = 'my_rand_secret_key_here'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'Login'
login_manager.login_message_category = 'info'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

#Class to define the model for TODO list 
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(120), unique = True, nullable = False)
    password = db.Column(db.String(60), nullable = False)
    def __repr__(self):
        return f"User('{self.email}')"
    def __repr__(self):
        return '<Task %r>' % self.id

#ORM model for the links
class links(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    link_name = db.Column(db.String(50), nullable = False)
    link_url = db.Column(db.String(20), nullable = False)
    link_type = db.Column(db.Boolean, default = False, nullable = False)
    date_created = db.Column(db.Date, default = datetime.utcnow)
    date_read = db.Column(db.Date)

    def __repr__(self):
        return '<Task %r>' % self.id

class RegistrationForm(FlaskForm):
    email = StringField('Email', validators = [DataRequired(), Email()])
    password = PasswordField('Password', validators = [DataRequired()])
    confirm = PasswordField('Confirm Password', validators = [DataRequired(), EqualTo('password')])
    submit =  SubmitField('Sign Up')
    #Default username validation
    def validate_username(self, username):
        user = User.query.filter_by(username = username.data).first()
        if user:
            raise ValidationError('The username is taken. Please choose a different one.')
    #Default email validation
    def validate_email(self, email):
        user = User.query.filter_by(email = email.data).first()
        if user:
            raise ValidationError('The email is taken. Please choose a different one.')

class LoginForm(FlaskForm):
    email = StringField('Email', validators = [DataRequired(), Email()])
    password = PasswordField('Password', validators = [DataRequired()])
    remember = BooleanField('Remember Me')
    submit =  SubmitField('Login')

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(500)
def page_not_found(e):
    return render_template("404.html"), 500

@app.route('/Register', methods = ['POST', 'GET'])
def Register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username = form.username.data, email = form.email.data, password = hashed_password)
        db.session.add(user)
        db.session.commit()
        flash("Your account has been created! You can now login", 'success')
        return redirect(url_for('Login'))
    return render_template('register.html', title='Register', form = form)

@app.route('/Login', methods = ['POST', 'GET'])
def Login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email = form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember = form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('index'))
        else:
            flash("Login unsuccessful! Please check email and password", 'danger')
    return render_template('login.html',  title='Login', form = form)

@app.route('/Logout')
def Logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/')
def index():
    return render_template("index.html")

counter = 0
@app.route('/aboutme')
def aboutme():
    global counter
    counter = counter + 1
    return render_template("intro.html", count = counter)

@app.route('/mat_calc')
def mat():
    file1 = os.path.join('static','main1.png')
    file2 = os.path.join('static','main2.gif')
    file3 = os.path.join('static','main3.gif')
    conn = sqlite3.connect(db_mat)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM prices")
    return render_template("mat_calc.html", image1 = file1, image2 = file2, image3 = file3, items = res)


@app.route('/Links')
@login_required
def Links():
    conn = sqlite3.connect(link_db)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM links")
    return render_template("links.html", links = res)

@app.route('/linkentry')
@login_required
def Linkentry():
    return render_template("linkentry.html")

@app.route('/readlinks')
def Read_Links():
    return render_template("readlinks.html")

@app.route('/bird')
def bird():
    return render_template("bird.html")

@app.route('/circles')
def circles():
    return render_template("animate.html")

@app.route('/save_form', methods=['POST'])
def save_form():
    try:
        Name = request.form.get('name')
        Email = request.form.get('email')
        Title = request.form.get('title')
        Message = request.form.get('message')
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        conn = sqlite3.connect(form_data)
        cur = conn.cursor()
        cur.execute("INSERT INTO form_data (Name, Email, Title, Message, Date) VALUES(?, ?, ?, ?, ?)" , (Name, Email, Title, Message, timestamp))
        conn.commit()
        return jsonify({"success": True})
    except:
        conn.rollback()
        return jsonify({"success": False})
    conn.close()

@app.route('/msgz', methods = ["POST", "GET"])
def msgz():
    if request.method == "POST" or request.method == "GET":
        conn = sqlite3.connect(form_data)
        cur = conn.cursor()
        res = cur.execute("SELECT * FROM form_data")
        return render_template("msgz.html", links = res)

if __name__ == "__main__":
    app.run(debug=True)