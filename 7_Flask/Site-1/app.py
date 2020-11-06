from flask import Flask, render_template
from flask_bootstrap import Bootstrap
app = Flask(__name__)       #Define the flask app thing
bootstrap = Bootstrap(app)

@app.route('/')
def index():
    fruits = ["apples", "berries", "grapes", "oranges"]
    return render_template('index.html', fruits = fruits)

@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name = name)

if __name__ == '__main__':
    app.run(debug=True)