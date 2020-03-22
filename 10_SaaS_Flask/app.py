from flask import *

app = Flask(__name__)

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


if __name__ == "__main__":
    app.run(debug=True)
