from market import app
from flask import render_template, redirect, url_for
from market.models import Item, User
from market.forms import RegisterForm
from market import db

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

#Main market page
@app.route('/market')
def market_page():
    items = Item.query.all()
    return render_template('market.html', items = items)

#Registration
@app.route('/register', methods = ['GET', 'POST'])
def register_page():
    form = RegisterForm()
    if form.validate_on_submit():
        user_to_create = User(username = form.username.data, email = form.email.data, password = form.password1.data)
        db.session.add(user_to_create)
        db.session.commit()
        return redirect(url_for('market_page'))
    return render_template('register.html', form = form)