from flask import Flask, render_template
import os
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/material')
def mat():
    file1 = os.path.join('static','main1.png')
    file2 = os.path.join('static','main2.gif')
    return render_template("mat_calc.html", image1 = file1, image2 = file2)

@app.route('/bird')
def bird():
    return render_template("bird.html")

if __name__ == '__main__':
    app.debug = True
    app.run(host = 'localhost',port=8000)