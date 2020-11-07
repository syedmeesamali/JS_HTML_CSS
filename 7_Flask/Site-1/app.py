from flask import Flask, render_template
from flask_bootstrap import Bootstrap
app = Flask(__name__)       #Define the flask app thing
bootstrap = Bootstrap(app)

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(500)
def page_not_found(e):
    return render_template("404.html"), 500

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return '<h2>This is a URL shortener</h2>'

if __name__ == '__main__':
    app.run(debug=True)