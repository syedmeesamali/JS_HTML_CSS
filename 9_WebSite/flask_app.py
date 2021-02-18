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
    link_name = db.Column(db.String(100), nullable = False)
    link_url = db.Column(db.String(200), nullable = False)
    link_type = db.Column(db.String(40), nullable = False)
    read = db.Column(db.Boolean, default = False, nullable = False)
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

@app.route('/Links')
@login_required
def Links():
    mylinks = links.query.order_by(links.id.desc()).filter_by(read = False).all()
    return render_template("links.html", links = mylinks)

@app.route('/Add')
def Add():
    return render_template("add_link.html")

#Posts on a specific category as filtered ones - 
#Really advanced for me and excellent function to use and deploy
@app.route('/Links/<string:type>')
def type_links(type):
    type_links = links.query.filter_by(link_type = type).all()
    #tasks = work.query.order_by(work.date_update.desc()).filter_by(completed = True).all()
    return render_template('type_links.html', type_links = type_links, type_title = type)

#New link entry
@app.route('/Add_Link', methods = ['POST'])
def Add_Link():
    if request.method == 'POST':
        link_name1 = request.form['myInput']
        link_url1 = request.form['remarks']
        link_type1 = request.form['pro-dropdown']
        link_to_add = links(link_name = link_name1, link_url = link_url1, link_type = link_type1)
        try:
            db.session.add(link_to_add)
            db.session.commit()
            return redirect('/add_link')
        except:
            return "There was some problem updating that link!"
    else:
        return render_template('add_link.html')

@app.route('/readlinks')
@login_required
def Read_Links():
    mylinks = links.query.filter_by(read = True).all()
    return render_template("readlinks.html", links = mylinks)

#Mark a link as read
@app.route('/read/<int:id>')
def read(id):
    link_read = links.query.get_or_404(id)              #Retrieve the link to mark as read
    link_read.read = True                               #Set the status to read
    link_read.date_read = datetime.utcnow()
    try:
        db.session.commit()
        return redirect('/readlinks')
    except:
        return render_template("404.html")

#Mark a link as read
@app.route('/delete/<int:id>')
def delete(id):
    del_link = links.query.get_or_404(id)              #Retrieve the link to mark as read
    try:
        db.session.delete(del_link)
        db.session.commit()
        return redirect('/links')
    except:
        return render_template("404.html")


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