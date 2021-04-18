from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Length, EqualTo, Email, DataRequired, ValidationError
from market.models import User

class RegisterForm(FlaskForm):
    
    #Validation of username if it already exists or not
    def validate_username(self, username):
        userVal = User.query.filter_by(username = username.data).first()
        if userVal:
            raise ValidationError('Username already exists! Please try a different name.')
    
    #Validation of email address if it already exists or not
    def validate_email(self, email):
        emailVal = User.query.filter_by(email = email.data).first()
        if emailVal:
            raise ValidationError('Email already exists! Please try a different email.')

    username = StringField(label='User Name: ', validators=[Length(min=2, max=30), DataRequired()])
    email = StringField(label='Email: ', validators=[Email(), DataRequired()])
    password1 = PasswordField(label='Password: ', validators=[Length(min=3, max=20), DataRequired()])
    password2 = PasswordField(label='Confirm Password: ', validators=[EqualTo('password1')])
    submit = SubmitField(label='Create Account')