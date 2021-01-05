from flask import Flask, render_template, request, url_for, redirect, flash, redirect
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LoginForm
from models import User, Post

import sqlite3

app = Flask(__name__)       #Define the flask app thing
bootstrap = Bootstrap(app)

app.config['SECRET_KEY'] = 'my_rand_secret_key_here'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)