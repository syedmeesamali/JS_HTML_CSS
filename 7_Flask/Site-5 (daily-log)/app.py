from flask import Flask, render_template, request, url_for, redirect, flash
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sqlite3

from flask_wtf import FlaskForm
from flask_login import current_user
from flask_wtf.file import FileField, FileAllowed
from wtforms import BooleanField, StringField, PasswordField, validators, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError


app = Flask(__name__)       #Define the flask app thing
bootstrap = Bootstrap(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///work.db'
db = SQLAlchemy(app)

#Class to define the model for TODO list 
class work(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    project_name = db.Column(db.String(50), nullable = False)
    location = db.Column(db.String(20), nullable = False)
    hlink = db.Column(db.String(200))
    activity = db.Column(db.String(50), nullable = False)
    completed = db.Column(db.Boolean, default = False, nullable = False)
    ongoing = db.Column(db.Boolean, default = False, nullable = False)
    remarks = db.Column(db.String(300))
    date_created = db.Column(db.Date, default = datetime.utcnow)
    date_update = db.Column(db.Date)

    def __repr__(self):
        return '<Task %r>' % self.id

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(500)
def page_not_found(e):
    return render_template("404.html"), 500

#Main display page
@app.route('/', methods = ['POST', 'GET'])
def index():
    tasks = work.query.filter_by(ongoing = False, completed = False).all()
    return render_template('index.html', tasks = tasks)

#Completed tasks to be shown - Display method
@app.route('/Completed', methods = ['POST', 'GET'])
def completed():
    if request.method == 'POST':
        tasks = work.query.order_by(work.date_update.desc()).filter_by(completed = True).all()
    else:
        tasks = work.query.filter_by(completed = True).all()
        return render_template('completed.html', tasks = tasks)

#Ongoing tasks to be shown - Display method
@app.route('/Ongoing', methods = ['POST', 'GET'])
def Ongoing():
    if request.method == 'POST':
        tasks = work.query.filter_by(ongoing = True).all()
    else:
        tasks = work.query.filter_by(ongoing = True).all()
        return render_template('ongoing.html', tasks = tasks)

#New task entry
@app.route('/Add_Ongoing', methods = ['POST', 'GET'])
def Add_Ongoing():
    if request.method == 'POST':
        project_name = request.form['myInput']
        remarks = request.form['remarks']
        activity = request.form['pro-dropdown']
        location = request.form['loc-dropdown']
        task_ongoing_add = work(project_name = project_name1, activity = activity1, location = location1, 
            remarks = remarks1)
        try:
            db.session.add(task_ongoing_add)
            db.session.commit()
            return redirect('/')
        except:
            return "There was some problem updating that task!"
    else:
        return render_template('index.html')

#DELETE a task from main page
@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = work.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return "There was some problem deleting that task!"

#DELETE a task from completed page
@app.route('/delete_complete/<int:id>')
def delete_complete(id):
    task_to_delete = work.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/Completed')
    except:
        return "There was some problem deleting that task!"

#DELETE a task from ongoing page
@app.route('/delete_ongoing/<int:id>')
def delete_ongoing(id):
    task_to_delete = work.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/Ongoing')
    except:
        return "There was some problem deleting that task!"

#UPDATE a task
@app.route('/update/<int:id>', methods = ['POST', 'GET'])
def update(id):
    task_to_update = work.query.get_or_404(id)
    if request.method == 'POST':
        task_to_update.project_name = request.form['myCountry']
        task_to_update.location = request.form['myLocation']
        task_to_update.activity = request.form['myActivity']
        task_to_update.remarks = request.form['remarks']
        try:
            db.session.commit()
            flash("Task has been updated successfully!", 'success')
            return redirect('/Ongoing')
        except:
            return "There was some problem updating that task!"
            flash("Some error occurred!", 'danger')
    else:
        return render_template('update.html', task = task_to_update)

#Mark a task as DONE from Main Page
@app.route('/done/<int:id>')
def done(id):
    task_done = work.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.completed = True                      #Set the status to completed
    task_done.ongoing = False                       #Remove ongoing status
    task_done.date_done = datetime.utcnow()
    try:
        db.session.commit()
        return redirect('/')
    except:
        return render_template("404.html")

#Mark a task as DONE from Main Page
@app.route('/task/<string:project_name>')
def task_project(project_name):
    task_list = work.query.filter_by(project_name = project_name).all()
    return render_template("task_list.html", tasks = tasks, task_title = project_name)

#Mark a task as DONE from Ongoing Tasks
@app.route('/done_ongoing/<int:id>')
def done_ongoing(id):
    task_done = work.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.ongoing = False                       #Remove ongoing status
    task_done.completed = True                      #Set the status to completed
    task_done.date_done = datetime.utcnow()         #Time the task was completed
    try:
        db.session.commit()
        return redirect('/Ongoing')
    except:
        return render_template("404.html")

#Mark a task as ONGOING still ...
@app.route('/current/<int:id>')
def current(id):
    task_done = work.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.completed = False
    task_done.ongoing = True                      #Set the status to completed
    try:
        db.session.commit()
        return redirect('/')
    except:
        return render_template("404.html")

#Mark a task as ONGOING from Completed List
@app.route('/current_ongoing/<int:id>')
def current_ongoing(id):
    task_done = work.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.ongoing = True                      #Set the status to completed
    task_done.completed = False
    try:
        db.session.commit()
        return redirect('/Completed')
    except:
        return render_template("404.html")

if __name__ == '__main__':
    app.run(debug=True)