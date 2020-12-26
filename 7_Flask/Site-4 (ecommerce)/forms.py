from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, validators, SubmitField
from wtforms.validators import DataRequired, Length, Email

class RegistrationForm(FlaskForm):
    name = StringField('Name', [validators.length(min = 4, max = 25)])
    username = StringField('Username', [validators.length(min = 4, max = 25)])
    email = StringField('Email Address', [validators.length(min = 6, max = 35), validators.Email()])
    password = PasswordField('New Password', [
        validators.DataRequired(), 
        validators.EqualTo('confirm', message = 'Passwords must match')
    ])
    confirm = PasswordField('Repeat Password')
    submit =  SubmitField('Sign Up')

class LoginForm(FlaskForm):
    email = StringField('Email Address', [validators.length(min = 6, max = 35), validators.Email()])
    password = PasswordField('New Password', [
        validators.DataRequired(), 
        validators.EqualTo('confirm', message = 'Passwords must match')
    ])
    submit =  SubmitField('Login')

