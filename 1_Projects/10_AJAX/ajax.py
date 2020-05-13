from flask import *
import time


form_data = "./form_data.db"
app = Flask(__name__)

@app.route("/", methods = ["POST", "GET"])
def main():
    return render_template("index.html", reload = time.time())

@app.route("/api/info")
def api_info():
    info = {
        "ip": "127.0.0.1",
        "hostname" : "ali",
        "desc" : "server",
        "load" : [3.21, 4.75, 14]
    }
    return jsonify(info)

@app.route("/api/calc")
def add():
    a = int(request.args.get('a', 0))
    b = int(request.args.get('b', 0))
    div = 'na'
    if b != 0:
        div = a/b
    return jsonify({
        "a" : a,
        "b" : a,
        "add" : a + b,
        "multiply" : a * b,
    })

if __name__ == "__main__":
    app.run(debug=True) 