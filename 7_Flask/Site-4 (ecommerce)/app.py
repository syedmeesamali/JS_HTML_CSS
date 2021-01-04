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

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(500)
def page_not_found(e):
    return render_template("404.html"), 500

#Main display page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Products')
def Products():
    return render_template('Products.html')

@app.route('/Gallery')
def Gallery():
    return render_template('Gallery.html')

@app.route('/Register', methods = ['POST', 'GET'])
def Register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f"Account created for {form.username.data}!", 'success')
        return redirect(url_for('index'))
    return render_template('register.html', title='Register', form = form)

@app.route('/Login', methods = ['POST', 'GET'])
def Login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash(f"You have successfully logged in!", 'success')
            return redirect(url_for('index'))
        else:
            flash(f"Login unsuccessful! Please check username and password", 'danger')
    return render_template('login.html',  title='Login', form = form)

if __name__ == '__main__':
    app.run(debug=True)