from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {'username':'Ali shah'}
    return render_template('index.html', user=user)
