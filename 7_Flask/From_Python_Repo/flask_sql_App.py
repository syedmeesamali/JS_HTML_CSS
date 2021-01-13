import os

from flask import Flask, render_template, request
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask(__name__)
engine = create_engine("postgres://postgres:admin@localhost:5432")
db = scoped_session(sessionmaker(bind=engine))


@app.route("/main")
def index():
    flights = db.execute("SELECT * FROM flights2").fetchall()
    return render_template("index.html", flights = flights)

@app.route("/book", methods=["POST"])
def book():
    name = request.form.get("name")
    #Book a new flight
    try:
        flight_id = int(request.form.get("flight_id"))
    except ValueError:
        return render_template("error.html", message="Invalid flight number")

    if db.execute("SELECT * FROM flights2 WHERE id= :id", {"id": flight_id}).rowcount == 0:
        render_template("error.html", message = "No flights with that ID")
    db.execute("INSERT INTO passengers (name, flight_id) VALUES (:name, :flight_id)",
               {"name": name, "flight_id": flight_id})
    db.commit()
    return render_template("success.html")
        
if __name__ == "__main__":
    app.run(debug=True)
