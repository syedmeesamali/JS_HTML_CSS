from flask import *
import time

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/_addNumbers")
def addNumbers():
    a = int(request.args.get('a', 0))
    b = int(request.args.get('b', 0))
    return jsonify(result = a + b)

if __name__ == "__main__":
    app.run(debug=True) 