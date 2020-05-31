from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime

form_data = "./form_data.db"
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/bird')
def bird():
    return render_template("bird.html")

@app.route('/save_form', methods=['POST'])
def save_form():
    try:
        Name = request.form.get('name')
        Email = request.form.get('email')
        Title = request.form.get('title')
        Message = request.form.get('message')
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        conn = sqlite3.connect(form_data)
        cur = conn.cursor()
        cur.execute("INSERT INTO form_data (Name, Email, Title, Message, Date) VALUES(?, ?, ?, ?, ?)" , (Name, Email, Title, Message, timestamp))
        conn.commit()
        return jsonify({"success": True})
    except:
        conn.rollback()
        return jsonify({"success": False})
    conn.close()

@app.route('/msgs', methods = ["POST", "GET"])
def msgs():
    if request.method == "POST" or request.method == "GET":
        conn = sqlite3.connect(form_data)
        cur = conn.cursor()
        res = cur.execute("SELECT * FROM form_data")
        return render_template("msgs.html", links = res)

if __name__ == "__main__":
    app.run(debug=True)