from flask import  Flask, render_template, request, jsonify, make_response
from app import app
import os
from datetime import datetime


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/save_form', methods=['POST'])
def save_form(): 
    a = 20
    # try:
    #     Name = request.form.get["name"]
    #     Email = request.form.get["email"]
    #     timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    #     return "Hello Mr. " + Name + " and email address: " + Email + " Time: " + timestamp
    # except:
    #     return "Sorry some problem happened"

