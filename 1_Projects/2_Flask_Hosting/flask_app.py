from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/material')
def mat():
    return render_template("mat_calc.html")

@app.route('/bird')
def bird():
    return render_template("bird.html")