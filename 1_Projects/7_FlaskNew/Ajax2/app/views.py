from flask import  Flask, render_template, request, jsonify, make_response
from app import app
import os
from datetime import datetime


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/save_form', methods=['POST'])
def save_form(): 
    try:
        Name = request.form.get["name"]
        Email = request.form.get["email"]
        Title = request.form.get["title"]
        Message = request.form.get["message"]
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        return jsonify({'Success': 'Thanks for your message!'})
    except:
        return jsonify({'Error': 'Sorry your message couldn\'t be delivered!'})

