import time

from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/posts', methods=["POST"])
def posts():
    start = int(request.form.get("start") or 0)
    end = int(request.form.get("end") or (start + 9))

    #Generate list of posts
    data = []
    for i in range(start, end+1):
        data.append(f"Post # {i}")
    #Artificially delay speed of mouse
    time.sleep(1)
    
    return jsonify(data)

if __name__ == "__main__":
    app.run()