from flask import *
import sqlite3
import os

database = "./database.db"
app = Flask(__name__)
app.config['DEBUG'] = True

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
        
    


@app.route('/')
def index():
    return render_template("index.html")



if __name__ == "__main__":
    app.run()