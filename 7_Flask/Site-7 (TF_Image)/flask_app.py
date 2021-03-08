from flask import *
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
import sqlite3
import os
from datetime import datetime

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

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/draw')
def draw():
    return render_template("draw.html")

@app.route('/prices')
def Prices():
    return render_template("prices.html")

if __name__ == "__main__":
    app.run(debug=True)