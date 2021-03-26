from market import app
from flask import render_template
from market.models import Item

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
    items = Item.query.all()
    return render_template('market.html', items = items)