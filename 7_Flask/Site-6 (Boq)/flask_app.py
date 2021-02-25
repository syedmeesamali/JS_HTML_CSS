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

class materials(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    material_name = db.Column(db.String(60), nullable = False)
    material_type = db.Column(db.String(100), nullable = False)
    material_supplier = db.Column(db.String(40), nullable = False)
    material_pkg = db.Column(db.String(40), nullable = False)
    mat_price = db.Column(db.String(40), nullable = False)
    mat_date = db.Column(db.Date)
    def __repr__(self):
        return '<Task %r>' % self.id
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

@app.route('/')
def index():
    return render_template("mat-calc.html")

@app.route('/boq')
def boq():
    return render_template("boq.html")

@app.route('/bird')
def bird():
    return render_template("bird.html")

@app.route('/draw')
def draw():
    return render_template("draw.html")

@app.route('/mat_calc')
def material():
    return render_template("mat-calc.html")

@app.route('/prices')
def Prices():
    prices = materials.query.all()
    return render_template("prices.html", prices = prices)

@app.route('/bbs')
def bbs():
    return render_template("bbs.html")

if __name__ == "__main__":
    app.run(debug=True)