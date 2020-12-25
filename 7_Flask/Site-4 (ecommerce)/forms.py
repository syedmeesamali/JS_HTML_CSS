from wtfforms import Form, BooleanField, StringField, PasswordField, validators

class RegistrationForm(Form):
    name = StringField('Name', [validators.length(min = 4, max = 25)])
    username = StringField('Username', [validators.length(min = 4, max = 25)])
    email = StringField('Email Address', [validators.length(min = 6, max = 35), validators.Email()])
    password = PasswordField('New Password', [
        validators.DataRequired(), 
        validators.EqualTo('confirm', message = 'Passwords must match')
    ])
    confirm = PasswordField('Repeat Password')

class LoginForm(Form):
    name = StringField('Name', [validators.length(min = 4, max = 25)])
    username = StringField('Username', [validators.length(min = 4, max = 25)])

