from flask import *
import os
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/token', methods = ["POST", "GET"])
def token():
    if request.method == "POST" or request.method == "GET":    
        code = request.form["code1"]
        if code == "MA15":
            return render_template("ideas.html")
        else:
            return render_template("code.html")
            

@app.route('/links')
def links():
    return render_template("links.html")

@app.route('/coring')
def coring():
    return render_template("Coring.html")

@app.route('/ideas')
def ideas():
    return render_template("code.html")

@app.route('/material')
def mat():
    file1 = os.path.join('static','main1.png')
    file2 = os.path.join('static','main2.gif')
    file3 = os.path.join('static','main3.gif')
    return render_template("mat_calc.html", image1 = file1, image2 = file2, image3 = file3)

@app.route('/draw')
def draw():
    filesrc = os.path.join('static','draw2.js')
    return render_template("draw.html", filesrc1 = filesrc)


if __name__ == "__main__":
    app.run()