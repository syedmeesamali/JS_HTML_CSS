from flask import Flask, render_template
import os
app = Flask(__name__)

@app.route('/')
def first():
    return render_template("first.html")

@app.route('/second')
def second():
    return render_template("second.html")

@app.route('/third')
def draw():
    return render_template("third.html")

if __name__ == "__main__":
    app.run()