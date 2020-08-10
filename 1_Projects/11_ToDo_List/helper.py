from flask import *
import sqlite3
import os
from datetime import datetime

database = "./database.db"
notstarted = 'Not Started'
inprogress = 'In Progress'
completed = 'Completed'

def add_to_list(item):
    try:
        conn = sqlite3.connect(database)

        #Cursor is used to execute the queries
        cur = conn.cursor()
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        cur.execute('INSERT INTO items(item, status, datetime) VALUES(?, ?, ?', (item, notstarted, timestamp))
        conn.commit()
        return {"item": item, "status": notstarted, "datetime": timestamp}
    except Exception as e:
        print("Some error:", e)
        return None

def get_all_items():
    try:
        conn = sqlite3.connect(database)
        cur = conn.cursor()
        cur.execute('SELECT * FROM items')
        rows = cur.fetchall
        return {"count": len(rows), "items": rows}
    except Exception as e:
        print('Error: ', e)
        return None