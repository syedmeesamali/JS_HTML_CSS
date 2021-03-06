from market import app
from flask import render_template, redirect, url_for, flash, request
from market.models import Item, User
from market.forms import RegisterForm, LoginForm, PurchaseForm, SellForm
from market import db, bcrypt
from flask_login import login_user, logout_user, login_required, current_user

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
@app.route('/market', methods = ['GET', 'POST'])
@login_required
def market_page():
    purchase_form = PurchaseForm()
    sell_form = SellForm()
    if request.method == 'POST':
        #Purchase item logic
        purchased_item = request.form.get('purchased_item')
        p_item_object = Item.query.filter_by(name = purchased_item).first()
        if p_item_object:
            if current_user.can_purchase(p_item_object):
                p_item_object.buy(current_user)
                flash(f"Contratulations! You successfully purchased {p_item_object.name} for {p_item_object.price}$", category='success')
            else:
                flash(f"Unfortunately you don't have enough money to purchase {p_item_object.name}!", category='danger')
        
        #SELL item logic
        sold_item = request.form.get('sold_item')
        s_item_object = Item.query.filter_by(name = sold_item).first()
        if s_item_object:
            if current_user.can_sell(s_item_object):
                s_item_object.sell(current_user)
                flash(f"Contratulations! You successfully SOLD {s_item_object.name} for {s_item_object.price}$", category='success')
            else:
                flash(f"Unfortunately you can't sell {s_item_object.name}!", category='danger')

        return redirect(url_for('market_page'))
    if request.method == 'GET':
        items = Item.query.filter_by(owner = None)
        owned_items = Item.query.filter_by(owner = current_user.id)
        return render_template('market.html', items = items, purchase_form = purchase_form, 
                owned_items = owned_items, sell_form = sell_form)
    

#Registration
@app.route('/register', methods = ['GET', 'POST'])
def register_page():
    form = RegisterForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user_to_create = User(username = form.username.data, 
                        email = form.email.data, 
                        password = hashed_password)
        db.session.add(user_to_create)
        db.session.commit()
        login_user(user_to_create)
        flash(f'Registered Successfully! Logged in as: {user_to_create.username}', category='success')
        return redirect(url_for('market_page'))
    if form.errors != {}:                   #Check if errors dictionary is empty or not
        for err_msg in form.errors.values():
            flash(f'There was an error: {err_msg}', category='danger')
    return render_template('register.html', form = form)


#Login page
@app.route('/login', methods = ['GET', 'POST'])
def login_page():
    form = LoginForm()
    if form.validate_on_submit():
        attempted_user = User.query.filter_by(username=form.username.data).first()
        if attempted_user and bcrypt.check_password_hash(attempted_user.password, form.password.data):
            login_user(attempted_user)
            flash(f'Successfully logged in as: {attempted_user.username}', category='success')
            return redirect(url_for('market_page'))
        else:
            flash(f'Username and/or password does not match', category='danger')
    return render_template('login.html', form=form)

#Logout page
@app.route('/logout', methods = ['GET', 'POST'])
def logout_page():
    logout_user()
    flash(f'You have been logged out!', category='info')
    return redirect(url_for('market_page'))