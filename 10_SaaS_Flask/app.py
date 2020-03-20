from flask import *

app = Flask(__name__)

@app.route('/')
def index():
    user = {'username': 'ali shah'}
    return render_template('index.html', user = user)

if __name__ == "__main__":
    app.run(debug=True)
