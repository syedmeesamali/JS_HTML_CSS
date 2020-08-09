from flask import *
import sqlite3
import os

database = "./database.db"
app = Flask(__name__)
app.config['DEBUG'] = True

#Below will run only on the first time. Will create initial db with three records
if not os.path.exists(database):
    conn = sqlite3.connect(database)
    cur = conn.cursor()
    cur.execute("CREATE TABLE users (fname TEXT, lname TEXT, age INTEGER);")
    conn.commit()
    cur.execute("INSERT INTO users VALUES('Mike', 'Tyson', '40');")
    cur.execute("INSERT INTO users VALUES('Thomas', 'Jasper', '40');")
    cur.execute("INSERT INTO users VALUES('Jerry', 'Mouse', '40');")
    cur.execute("INSERT INTO users VALUES('Peter', 'Pan', '40');")
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

#Below is for the homepage
@app.route('/')
def index():
    cur = get_db().cursor()
    res = cur.execute("SELECT * FROM users")
    return render_template("index.html", users = res)

#Below route is for ADDING new records
@app.route('/add')
def add():
    return render_template("add.html")

#Below route is for viewing the existing records
@app.route('/view')
def view():
    cur = get_db().cursor()
    res = cur.execute("SELECT * FROM users")
    return render_template("view.html", users = res)

@app.route('/delete')
def delete():
    return render_template("index.html")

@app.route('/savedetails', methods = ["POST", "GET"])
def savedetails():
    msg = "msg"
    if request.method == "POST":
        try:
            fname = request.form["fname"]
            lname = request.form["lname"]
            age = request.form["age"]
            conn = sqlite3.connect(database)
            cur = conn.cursor()
            cur.execute("INSERT INTO users (fname, lname, age) VALUES(?, ?, ?)", (fname, lname, age))
            conn.commit()
            msg = "Data Entered Successfully"
        except:
            conn.rollback()
            msg = "Can't add the data at this time"
        finally:
            return render_template("success.html", msg = msg)
            conn.close()
    return render_template("index.html", users = res)

if __name__ == "__main__":
    app.run()