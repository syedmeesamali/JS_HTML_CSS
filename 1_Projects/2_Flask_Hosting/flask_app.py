from flask import *
import os

database = "./database.db"
app = Flask(__name__)

#Below will run only on the first time. Will create initial db with three records
if not os.path.exists(database):
    conn = sqlite3.connect(database)
    cur = conn.cursor()
    cur.execute("CREATE TABLE projects (pname TEXT, year INTEGER, cores TEXT, Qty INTEGER, price INTEGER);")
    conn.commit()
    cur.execute("INSERT INTO users VALUES('Sample Project', 2017, '100, 150', 50, 7500);")
    conn.commit()
    conn.close()

#Get database details
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(database)
    return db

#Helper to close
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/savedetails', methods = ["POST", "GET"])
def savedetails():
    msg = "msg"
    if request.method == "POST":
        try:
            pname = request.form["project"]
            year = request.form["year"]
            cores = request.form["core"]
            quantity = request.form["quantity"]
            price = request.form["price"]
            conn = sqlite3.connect(database)
            cur = conn.cursor()
            cur.execute("INSERT INTO projects (pname, year, cores, quantity, price) VALUES(?, ?, ?, ?, ?)", (pname, year, cores, quantity, price))
            conn.commit()
            msg = "Data Entered Successfully !"
        except:
            conn.rollback()
            msg = "Sorry can't update the database..."
        finally:
            return render_template("success.html", msg = msg)
            conn.close()
    return render_template("index.html", users = res)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/token1', methods = ["POST", "GET"])
def token1():
    if request.method == "POST" or request.method == "GET":
        code1 = request.form["code1"]
        if code1 == "MA15":
            return render_template("ideas.html")
        else:
            return render_template("code1.html")
            
@app.route('/token2', methods = ["POST", "GET"])
def token2():
    if request.method == "POST" or request.method == "GET":    
        code2 = request.form["code2"]
        if code2 == "ccl123":
            return render_template("coring.html")
        else:
            return render_template("code2.html")

@app.route('/token3', methods = ["POST", "GET"])
def token3():
    if request.method == "POST" or request.method == "GET":    
        code3 = request.form["code3"]
        if code3 == "meesamali":
            return render_template("entry.html")
        else:
            return render_template("code3.html")

@app.route('/links')
def links():
    return render_template("links.html")

@app.route('/aboutme')
def aboutme():
    return render_template("intro.html")

@app.route('/coring')
def coring():
    return render_template("code2.html")

@app.route('/ideas')
def ideas():
    return render_template("code1.html")

@app.route('/mat_calc')
def mat():
    file1 = os.path.join('static','main1.png')
    file2 = os.path.join('static','main2.gif')
    file3 = os.path.join('static','main3.gif')
    return render_template("mat_calc.html", image1 = file1, image2 = file2, image3 = file3)

@app.route('/draw')
def draw():
    filesrc = os.path.join('static','draw2.js')
    return render_template("draw.html", filesrc1 = filesrc)

@app.route('/entry')
def entry():
    return render_template("code3.html")


@app.route('/bird')
def bird():
    return render_template("bird.html")

if __name__ == "__main__":
    app.run(debug=True)