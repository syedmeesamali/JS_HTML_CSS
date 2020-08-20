from flask import *
import sqlite3
import os
from datetime import datetime

link_db = "./links.db"
read_db = "./read.db"
app = Flask(__name__)

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


@app.route('/links')
def links():
    conn = sqlite3.connect(link_db)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM links")
    return render_template("links.html", links = res)


@app.route('/readlinks')
def readlinks():
    conn = sqlite3.connect(read_db)
    cur = conn.cursor()
    res = cur.execute("SELECT * FROM read")
    return render_template("readlinks.html", links = res)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/linkentry')
def linkentry():
    return render_template("code4.html")



if __name__ == "__main__":
    app.run(debug=True)