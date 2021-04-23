from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Length, EqualTo, Email, DataRequired, ValidationError
from market.models import User

class RegisterForm(FlaskForm):
    #Validation of username if it already exists or not
    def validate_username(self, username_check):
        user = User.query.filter_by(username = username_check.data).first()
        if user:
            raise ValidationError('Username already exists! Please try a different name.')
    
    #Validation of email address if it already exists or not
    def validate_email(self, email_address_check):
        email_address = User.query.filter_by(email_address = email_address_check.data).first()
        if email_address:
            raise ValidationError('Email already exists! Please try a different email.')

    username = StringField(label='User Name: ', validators=[Length(min=2, max=30), DataRequired()])
    email_address = StringField(label='Email: ', validators=[Email(), DataRequired()])
    password1 = PasswordField(label='Password: ', validators=[Length(min=3), DataRequired()])
    password2 = PasswordField(label='Confirm Password: ', validators=[EqualTo('password1')])
    submit = SubmitField(label='Create Account')

class LoginForm(FlaskForm):
    username = StringField(label='User Name: ', validators = [DataRequired()])
    password = PasswordField(label='Password: ', validators = [DataRequired()])
    submit = SubmitField(label='Create Account')