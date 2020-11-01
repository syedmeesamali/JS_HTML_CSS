from flask import , request, Flask, render_template, make_response
app = Flask(__name__)       #Define the flask app thing

@app.route('/')
def index():
    user_agent = request.headers.get('User-Agent')
    return '<p>Your browser is {} </p>'.format(user_agent)

@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name = name)

if __name__ == '__main__':
    app.run(debug=True)