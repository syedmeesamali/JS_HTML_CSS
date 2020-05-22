from flask import  Flask, render_template, request, jsonify
from app import app
import os
from datetime import datetime
import sqlite3

form_data = "./form_data.db"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/save_form', methods=['POST'])
def save_form(): 
    try:
        conn = sqlite3.connect(form_data)
        Name = request.form["name"]
        Email = request.form["email"]
        Title = request.form["title"]
        Message = request.form["message"]
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        cur = conn.cursor()
        cur.execute("INSERT INTO form_data (Name, Email, Title, Message, Date) VALUES(?, ?, ?, ?, ?)" , (Name, Email, Title, Message, timestamp))
        conn.commit()
        return jsonify({'Success': 'Thanks for your message!'})
    except:
        conn.rollback()
        return jsonify({'Error': 'Sorry your message couldn\'t be delivered!'})
    conn.close()