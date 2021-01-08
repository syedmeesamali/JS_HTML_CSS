from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, validators, SubmitField
from wtforms.validators import DataRequired, Length, Email, EqualTo
from app.models import User

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators = [DataRequired(), Length(min = 4, max = 20)])
    email = StringField('Email', validators = [DataRequired(), Email()])
    password = PasswordField('Password', validators = [DataRequired()])
    confirm = PasswordField('Confirm Password', validators = [DataRequired(), EqualTo('password')])
    submit =  SubmitField('Sign Up')
    
    def validate_username(self, username):
        user = User.query.filter_by(username = username.data)
        if True:
            raise ValidationError('Validation Message')


class LoginForm(FlaskForm):
    email = StringField('Email', validators = [DataRequired(), Email()])
    password = PasswordField('Password', validators = [DataRequired()])
    remember = BooleanField('Remember Me')
    submit =  SubmitField('Login')

