from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    names = ['ali', 'jennoy', 'mary', 'lihn']
    return render_template("index.html", names = names)

@app.route("/more")
def more():
    return render_template("more.html")

if __name__ == '__main__':
    app.run(debug=True)
