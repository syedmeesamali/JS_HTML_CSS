from flask import *
from config import Config

app = Flask(__name__)
app.config.from_object(Object)
from app import routes

@app.route('/')
def index():
    user = {'username': 'ali shah'}
    posts = [{
            'author': {'username': 'Meesam'},
            'body': 'Beautiful rainy day in Dubai'
        }, {
            'author': {'username': 'Rabbit'},
            'body': 'Beautiful life is the meaningful life'
        }]
    return render_template('index.html', user = user, posts = posts)

@app.route('/puppy_latin/<name>')
def puppylatin(name):
    pupname = ''
    if name[-1] == 'y':
        pupname = name[:-1] + 'iful'
    else:
        pupname = name + 'y'
    return "<h2> Your puppy latin name is: {}".format(pupname)

@app.route('/info')
def info():
    return "<h2> Cute puppy site </h2>"

@app.route('/home')
def home():
    return render_template('main.html')

if __name__ == "__main__":
    app.run(debug=True)
