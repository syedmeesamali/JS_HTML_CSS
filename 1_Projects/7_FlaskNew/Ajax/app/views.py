from flask import render_template, request, jsonify
from app import app
from datetime import datetime

form_data = "./form_data.db"

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/save_form', methods=['POST'])
def save_form():
    #msg = "msg"
    try:
        Name = request.form["name"]
        Email = request.form["email"]
        Title = request.form["title"]
        Message = request.form["message"]
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        conn = sqlite3.connect(form_data)
        cur = conn.cursor()
        cur.execute("INSERT INTO form_data (Name, Email, Title, Message, Date) VALUES(?, ?, ?, ?, ?)" , (Name, Email, Title, Message, timestamp))
        conn.commit()
        return jsonify({'Message': 'Thanks for your message!'})
    except:
        conn.rollback()
        return jsonify({'error': 'Sorry your message couldn\'t be delivered!'})
    conn.close()