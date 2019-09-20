import time

from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/posts', method=["POST"])
def posts():
    start = int(request.form.get("start") or 0)
    end = int(request.form.get("end") or (start + 9))



if __name__ == "__main__":
    app.run()