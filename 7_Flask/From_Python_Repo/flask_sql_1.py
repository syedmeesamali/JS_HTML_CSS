import os

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

engine = create_engine("postgres://postgres:admin@localhost:5432")

db = scoped_session(sessionmaker(bind=engine))

def main():
    flights = db.execute("SELECT origin, destination, duration FROM flights2").fetchall()
    for flight in flights:
        print(f"{flight.origin} to {flight.destination}, {flight.duration}")
        

if __name__ == "__main__":
    main()
