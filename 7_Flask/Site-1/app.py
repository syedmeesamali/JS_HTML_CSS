from flask import request, Flask, render_template, make_response
app = Flask(__name__)       #Define the flask app thing

@app.route('/')
def index():
    fruits = ["apples", "berries", "grapes", "oranges"]
    return render_template('index.html', fruits = fruits)

@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name = name)

if __name__ == '__main__':
    app.run(debug=True)