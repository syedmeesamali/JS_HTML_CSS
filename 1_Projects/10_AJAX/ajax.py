from flask import Flask, render_template, request, jsonify
import time

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    req = request.get_json()
    print(req)
    res = make_response(jsonify({"message": "OK"}),200)
    return res

if __name__ == "__main__":
    app.run(debug=True) 