from flask import Flask, render_template, request, url_for, redirect
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sqlite3

app = Flask(__name__)       #Define the flask app thing
bootstrap = Bootstrap(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

#Class to define the model for TODO list 
class ToDo(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.String(200), nullable = False)
    completed = db.Column(db.Boolean, default = False, nullable = False)
    ongoing = db.Column(db.Boolean, default = False, nullable = False)
    date_created = db.Column(db.DateTime, default = datetime.utcnow)

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
    if request.method == 'POST':
        task_content = request.form['content']
        new_task = ToDo(content = task_content)
        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect('/')
        except:
            return "There was some error"
    else:
        tasks = ToDo.query.filter_by(completed = False).all()
        return render_template('index.html', tasks = tasks)

#Completed tasks to be shown - Display method
@app.route('/Completed', methods = ['POST', 'GET'])
def completed():
    if request.method == 'POST':
        tasks = ToDo.query.filter_by(completed = True).all()
    else:
        tasks = ToDo.query.filter_by(completed = True).all()
        return render_template('completed.html', tasks = tasks)

#Ongoing tasks to be shown - Display method
@app.route('/Ongoing', methods = ['POST', 'GET'])
def Ongoing():
    if request.method == 'POST':
        tasks = ToDo.query.filter_by(ongoing = True).all()
    else:
        tasks = ToDo.query.filter_by(ongoing = True).all()
        return render_template('ongoing.html', tasks = tasks)

#DELETE a task
@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = ToDo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return "There was some problem deleting that task!"

#UPDATE a task
@app.route('/update/<int:id>', methods = ['POST', 'GET'])
def update(id):
    task_to_update = ToDo.query.get_or_404(id)
    if request.method == 'POST':
        task_to_update.content = request.form['content']
        try:
            db.session.commit()
            return redirect('/')
        except:
            return "There was some problem deleting that task!"
    else:
        return render_template('update.html', task = task_to_update)

#Mark a task as DONE
@app.route('/done/<int:id>')
def done(id):
    task_done = ToDo.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.completed = True                      #Set the status to completed
    try:
        db.session.commit()
        return redirect('/')
    except:
        return render_template("404.html")

#Mark a task as ONGOING still ...
@app.route('/current/<int:id>')
def current(id):
    task_done = ToDo.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.ongoing = True                      #Set the status to completed
    try:
        db.session.commit()
        return redirect('/')
    except:
        return render_template("404.html")

if __name__ == '__main__':
    app.run(debug=True)