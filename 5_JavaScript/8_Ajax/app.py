from flask import Flask
from flask import render_template, redirect, url_for, flash, request

app = Flask(__name__)       #Define the flask app thing

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(500)
def page_not_found(e):
    return render_template("404.html"), 500

#Main display page
@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/data')
def query():
    return 'Todo..'

if __name__ == '__main__':
    app.run(debug=True)