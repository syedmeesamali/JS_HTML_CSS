from flask import *
import sqlite3
import os
from datetime import datetime

database = "./coring.db"
link_db = "./links.db"
read_db = "./read.db"
db_ideas = "./ideas.db"
db_done = "./done.db"
db_mat = "./mat_pricing.db"
form_data = "./form_data.db"

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
            id = request.form["id"]
            desc = request.form["desc"]
            linkurl = request.form["linkurl"]
            linktype = request.form["linktype"]
            conn = sqlite3.connect(link_db)
            cur = conn.cursor()
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            cur.execute("INSERT INTO links (ID, Desc, linkUrl, linkType, added) VALUES(?, ?, ?, ?, ?)" , (id, desc, linkurl, linktype, timestamp))
            conn.commit()
            msg = "Data Entered Successfully!"
        except:
            conn.rollback()
            msg = "Sorry couldn't update the database..."
        finally:
            return render_template("success.html", msg = msg)
            conn.close()
    return render_template("index.html")

@app.route('/saveideas', methods = ["POST", "GET"])
def saveideas():
    msg = "msg"
    if request.method == "POST":
        try:
            ID = request.form["id"]
            desc = request.form["desc"]
            Type = request.form["type"]
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            conn = sqlite3.connect(db_ideas)
            cur = conn.cursor()
            cur.execute("INSERT INTO ideas (ID, Desc, Type, Date) VALUES(?, ?, ?, ?)" , (ID, desc, Type, timestamp))
            conn.commit()
            msg = "Data Entered Successfully!"
        except:
            conn.rollback()
            msg = "Sorry couldn't update the database..."
        finally:
            return render_template("success.html", msg = msg)
            conn.close()
    return render_template("index.html")

@app.route('/ideasdone')
def ideasdone():
    conn = sqlite3.connect(db_done)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM ideasdone")
    return render_template("ideasdone.html", links = res)

@app.route('/done/<int:val>', methods = ["POST", "GET"])
def done(val):
    if request.method == "POST":
        msg = "msg"
        try:
            conn = sqlite3.connect(db_ideas)
            conn2 = sqlite3.connect(db_done)
            cur = conn.cursor()
            cur1 = conn2.cursor()
            cur.execute("SELECT ID FROM ideas WHERE ID = ?", (val,))
            id = cur.fetchone()[0]
            cur.execute("SELECT Desc FROM ideas WHERE ID = ?", (val,))
            desc = cur.fetchone()[0]
            cur.execute("SELECT Type FROM ideas WHERE ID = ?", (val,))
            Type = cur.fetchone()[0]
            cur.execute("SELECT Date FROM ideas WHERE ID = ?", (val,))
            Date = cur.fetchone()[0]
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            cur1.execute("INSERT INTO ideasdone (ID, Desc, Type, strt, ending) VALUES(?, ?, ?, ?, ?)" , (id, desc, Type, Date, timestamp))
            cur.execute("DELETE FROM ideas WHERE ID = ?", (val,))
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

@app.route('/read/<int:val>', methods = ["POST", "GET"])
def read(val):
    if request.method == "POST":
        msg = "msg"
        try:
            conn = sqlite3.connect(link_db)
            conn2 = sqlite3.connect(read_db)
            cur = conn.cursor()
            cur1 = conn2.cursor()
            cur.execute("SELECT ID FROM links WHERE ID = ?", (val,))
            id = cur.fetchone()[0]
            cur.execute("SELECT Desc FROM links WHERE ID = ?", (val,))
            Desc = cur.fetchone()[0]
            cur.execute("SELECT linkUrl FROM links WHERE ID = ?", (val,))
            linkUrl = cur.fetchone()[0]
            cur.execute("SELECT linkType FROM links WHERE ID = ?", (val,))
            linkType = cur.fetchone()[0]
            cur.execute("SELECT added FROM links WHERE ID = ?", (val,))
            Date = cur.fetchone()[0]
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            cur1.execute("INSERT INTO read (ID, desc, url, type, added, read) VALUES(?, ?, ?, ?, ?, ?)" , (id, Desc, linkUrl, linkType, Date, timestamp))
            cur.execute("DELETE FROM links WHERE ID = ?", (val,))
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

@app.route('/delete/<int:val>', methods = ["POST", "GET"])
def delete(val):
    if request.method == "POST":
        msg = "msg"
        try:
            conn = sqlite3.connect(link_db)
            cur = conn.cursor()
            cur.execute("DELETE FROM links WHERE ID = ?", (val,))
            conn.commit()
            msg = "Data Deleted Successfully!"
        except:
            conn.rollback()
            msg = "Couldn't update the databases.....!"
        finally:
            return render_template("success.html", msg = msg)
            conn.close()

@app.route('/entry')
def entry():
    conn = sqlite3.connect(database)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM cores")
    return render_template("entry2.html", users = res)

@app.route('/sort', methods = ["POST", "GET"])
def sort():
    if request.method == "POST":
        try:
            conn = sqlite3.connect(database)
            cur = conn.cursor()
            res = cur.execute("SELECT * FROM cores ORDER BY total DESC")
        except:
            return render_template("entry2.html", users = res)
        finally:
            return render_template("entry2.html", users = res)

@app.route('/links')
def links():
    return render_template("code5.html")

@app.route('/ideaentry')
def ideaentry():
    return render_template("ideaentry.html")

@app.route('/readlinks')
def readlinks():
    conn = sqlite3.connect(read_db)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM read")
    return render_template("readlinks.html", links = res)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/token1', methods = ["POST", "GET"])
def token1():
    if request.method == "POST" or request.method == "GET":
        code1 = request.form["code1"]
        if code1 == "meesam":
            conn = sqlite3.connect(db_ideas)
            cur = conn.cursor()
            res = cur.execute("SELECT * FROM ideas")
            return render_template("ideas.html", links = res)
        else:
            return render_template("code1.html")

@app.route('/token2', methods = ["POST", "GET"])
def token2():
    if request.method == "POST" or request.method == "GET":
        code2 = request.form["code2"]
        if code2 == "ccl123":
            return render_template("entry.html")
        else:
            return render_template("code2.html")

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
        if code5 == "shah1512":
            conn = sqlite3.connect(link_db)
            cur = conn.cursor()
            res = cur.execute("SELECT * FROM links")
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
    conn = sqlite3.connect(db_mat)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM prices")
    return render_template("mat_calc.html", image1 = file1, image2 = file2, image3 = file3, items = res)

@app.route('/draw')
def draw():
    filesrc = os.path.join('static','draw2.js')
    return render_template("draw.html", filesrc1 = filesrc)

@app.route('/entry2')
def entry2():
    return render_template("code3.html")

@app.route('/linkentry')
def linkentry():
    return render_template("code4.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/bird')
def bird():
    return render_template("bird.html")

@app.route('/circles')
def circles():
    return render_template("animate.html")

@app.route('/fruits')
def fruits():
    return render_template("letters.html")

@app.route('/save_form', methods=['POST'])
def save_form():
    try:
        Name = request.form.get('name')
        Email = request.form.get('email')
        Title = request.form.get('title')
        Message = request.form.get('message')
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        conn = sqlite3.connect(form_data)
        cur = conn.cursor()
        cur.execute("INSERT INTO form_data (Name, Email, Title, Message, Date) VALUES(?, ?, ?, ?, ?)" , (Name, Email, Title, Message, timestamp))
        conn.commit()
        return jsonify({"success": True})
    except:
        conn.rollback()
        return jsonify({"success": False})
    conn.close()

@app.route('/msgz', methods = ["POST", "GET"])
def msgz():
    if request.method == "POST" or request.method == "GET":
        conn = sqlite3.connect(form_data)
        cur = conn.cursor()
        res = cur.execute("SELECT * FROM form_data")
        return render_template("msgz.html", links = res)

if __name__ == "__main__":
    app.run(debug=True)