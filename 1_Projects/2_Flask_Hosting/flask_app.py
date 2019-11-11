from flask import *
import sqlite3
import os

database = "./database.db"
database2 = "./linkdb.db"
database3 = "./read.db"
db_ideas = "./ideas.db"
db_done = "./done.db"
app = Flask(__name__)

@app.route('/savedetails', methods = ["POST", "GET"])
def savedetails():
    msg = "msg"
    if request.method == "POST":
        try:
            pname = request.form["project"]
            year = request.form["year"]
            cores = request.form["core"]
            Qty = request.form["quantity"]
            price = request.form["price"]
            conn = sqlite3.connect(database)
            cur = conn.cursor()
            cur.execute("INSERT INTO projects (pname, year, cores, Qty, price) VALUES(?, ?, ?, ?, ?)" , (pname, year, cores, Qty, price))
            conn.commit()
            msg = "Data Entered Successfully!"
        except:
            conn.rollback()
            msg = "Sorry can't update the database..."
        finally:
            return render_template("success.html", msg = msg)
            conn.close()
    return render_template("index.html")

@app.route('/savelinks', methods = ["POST", "GET"])
def savelinks():
    msg = "msg"
    if request.method == "POST":
        try:
            desc = request.form["desc"]
            linkurl = request.form["linkurl"]
            linktype = request.form["linktype"]
            conn = sqlite3.connect(database2)
            cur = conn.cursor()
            cur.execute("INSERT INTO mylinks (desc, linkurl, linktype) VALUES(?, ?, ?)" , (desc, linkurl, linktype))
            conn.commit()
            msg = "Data Entered Successfully!"
        except:
            conn.rollback()
            msg = "Sorry couldn't update the database..."
        finally:
            return render_template("success.html", msg = msg)
            conn.close()
    return render_template("index.html")

@app.route('/entry')
def entry():
    conn = sqlite3.connect(database)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM projects")
    return render_template("entry2.html", users = res)

@app.route('/links')
def links():
    return render_template("code5.html")

@app.route('/readlinks')
def readlinks():
    conn = sqlite3.connect(database3)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM readlinks")
    return render_template("readlinks.html", links = res)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/token1', methods = ["POST", "GET"])
def token1():
    if request.method == "POST" or request.method == "GET":
        code1 = request.form["code1"]
        if code1 == "meesam":
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

@app.route('/token4', methods = ["POST", "GET"])
def token4():
    if request.method == "POST" or request.method == "GET":
        code4 = request.form["code4"]
        if code4 == "shahg":
            return render_template("linkentry.html")
        else:
            return render_template("code4.html")

@app.route('/token5', methods = ["POST", "GET"])
def token5():
    if request.method == "POST" or request.method == "GET":
        code5 = request.form["code5"]
        if code5 == "shah":
            conn = sqlite3.connect(database2)
            cur = conn.cursor()
            res = cur.execute("SELECT * FROM mylinks")
            return render_template("links.html", links = res)
        else:
            return render_template("code5.html")

counter = 0
@app.route('/aboutme')
def aboutme():
    global counter
    counter = counter + 1
    return render_template("intro.html", count = counter)

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

@app.route('/entry2')
def entry2():
    return render_template("code3.html")

@app.route('/read/<int:val>', methods = ["POST", "GET"])
def read(val):
    if request.method == "POST":
        msg = "msg"
        try:
            conn = sqlite3.connect(database2)
            conn2 = sqlite3.connect(database3)
            cur = conn.cursor()
            cur1 = conn2.cursor()
            cur.execute("SELECT desc FROM mylinks WHERE rowid = ?", (val,))
            desc = cur.fetchone()[0]
            cur.execute("SELECT linkurl FROM mylinks WHERE rowid = ?", (val,))
            linkurl = cur.fetchone()[0]
            cur.execute("SELECT linktype FROM mylinks WHERE rowid = ?", (val,))
            linktype = cur.fetchone()[0]
            cur1.execute("INSERT INTO readlinks (desc, linkurl, linktype) VALUES(?, ?, ?)" , (desc, linkurl, linktype))
            cur.execute("DELETE FROM mylinks WHERE rowid = ?", (val,))
            conn2.commit()
            conn.commit()
            msg = "Data Entered Successfully!"
        except:
            conn.rollback()
            conn2.rollback()
            msg = "Couldn't update the databases.....!"
        finally:
            return render_template("success.html", msg = msg)
            conn.close()
            conn2.close()
    return render_template("index.html")

@app.route('/linkentry')
def linkentry():
    return render_template("code4.html")

@app.route('/bird')
def bird():
    return render_template("bird.html")

if __name__ == "__main__":
    app.run(debug=True)