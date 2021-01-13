import datetime
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/main")
def index():
    now = datetime.datetime.now()
    #check if today is the new year
    new_year = now.month == 1 and now.day == 1
    new_year = True
    return render_template("index.html", new_year = new_year)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
