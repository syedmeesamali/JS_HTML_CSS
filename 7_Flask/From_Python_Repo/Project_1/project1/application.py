import os

from flask import Flask, session
from flask_session import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask(__name__)
engine = create_engine("postgres://qutsooplqiicse:d60da7c9883bd2eba6ce3507550dd0e11ef8afa7f4a6557beac7eb79f16208e5@ec2-54-235-68-3.compute-1.amazonaws.com:5432/d1cpp71n0aft0")
db = scoped_session(sessionmaker(bind=engine))
                       

# Configure session to use filesystem
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)



@app.route("/")
def index():
    return "Project 1: TODO"
