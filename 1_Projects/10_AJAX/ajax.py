from flask import Flask, render_template, request, jsonify
import time

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    name = request.form["name"]
    email = request.form["email"]
    if name and email:
        newName = name[::-1]
        return jsonify({'name': newName})
    return jsonify({'error': 'Missing Data!'})

if __name__ == "__main__":
    app.run(debug=True) 