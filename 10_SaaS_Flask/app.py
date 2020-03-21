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

if __name__ == "__main__":
    app.run(debug=True)
