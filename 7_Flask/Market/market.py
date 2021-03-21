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

app.config['SECRET_KEY'] = 'my_rand_secret_key_here_too'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(500)
def page_not_found(e):
    return render_template("404.html"), 500

#Main display page
@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

#Main display page
@app.route('/market')
def market_page():
    return render_template('market.html', item_name = 'iPhone')

if __name__ == '__main__':
    app.run(debug=True)