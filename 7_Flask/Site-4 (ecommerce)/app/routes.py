from flask import render_template, request, url_for, redirect, flash, redirect
from app import app, db, bcrypt
from app.models import User, Post
from app.forms import RegistrationForm, LoginForm

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
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash(f"You have successfully logged in!", 'success')
            return redirect(url_for('index'))
        else:
            flash(f"Login unsuccessful! Please check username and password", 'danger')
    return render_template('login.html',  title='Login', form = form)