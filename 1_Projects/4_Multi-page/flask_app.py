from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route('/')
def first():
    return render_template("first.html")

@app.route('/second')
def second():
    return render_template("second.html")

@app.route('/third')
def third():
    return render_template("third.html")



if __name__ == "__main__":
    app.run()