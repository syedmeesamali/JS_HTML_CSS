from flask import *
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, current_user, logout_user, login_required
import sqlite3
import os
from datetime import datetime

from flask_wtf import FlaskForm
from flask_login import current_user
from flask_wtf.file import FileField, FileAllowed
from wtforms import BooleanField, StringField, PasswordField, validators, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError

app = Flask(__name__)       #Define the flask app thing
bootstrap = Bootstrap(app)

app.config['SECRET_KEY'] = 'my_rand_secret_key_here_too'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'Login'
login_manager.login_message_category = 'info'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(120), unique = True, nullable = False)
    password = db.Column(db.String(60), nullable = False)
    def __repr__(self):
        return f"User('{self.email}')"
    def __repr__(self):
        return '<Task %r>' % self.id

#Class to define the model for TODO list
class ToDo(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.String(200), nullable = False)
    completed = db.Column(db.Boolean, default = False, nullable = False)
    ongoing = db.Column(db.Boolean, default = False, nullable = False)
    date_created = db.Column(db.Date, default = datetime.utcnow)
    date_done = db.Column(db.Date, default = datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id

class LoginForm(FlaskForm):
    email = StringField('Email', validators = [DataRequired(), Email()])
    password = PasswordField('Password', validators = [DataRequired()])
    remember = BooleanField('Remember Me')
    submit =  SubmitField('Login')

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(500)
def page_not_found(e):
    return render_template("404.html"), 500

@app.route('/Login', methods = ['POST', 'GET'])
def Login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email = form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember = form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('index'))
        else:
            flash("Login unsuccessful! Please check email and password", 'danger')
    return render_template('login.html',  title='Login', form = form)

@app.route('/Logout')
def Logout():
    logout_user()
    return redirect(url_for('index'))

#Main display page
@app.route('/tasks', methods = ['POST', 'GET'])
@login_required
def index():
    tasks = ToDo.query.filter_by(ongoing = False, completed = False).all()
    return render_template('tasks.html', tasks = tasks)
        

#Main display page
@app.route('/')
def home():
    return render_template('index.html')

#Add new tasks
@app.route('/add_task', methods = ['POST', 'GET'])
def add_task():
    if request.method == 'POST':
        task_content = request.form['content']
        new_task = ToDo(content = task_content)
        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect('/tasks')
        except:
            return "There was some error"
    else:
        tasks = ToDo.query.filter_by(ongoing = False, completed = False).all()
        return render_template('tasks.html', tasks = tasks)

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
def ongoing():
    if request.method == 'POST':
        tasks = ToDo.query.filter_by(ongoing = True).all()
    else:
        tasks = ToDo.query.filter_by(ongoing = True).all()
        return render_template('ongoing.html', tasks = tasks)

#DELETE a task from main page
@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = ToDo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/tasks')
    except:
        return "There was some problem deleting that task!"

#DELETE a task from completed page
@app.route('/delete_complete/<int:id>')
def delete_complete(id):
    task_to_delete = ToDo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/Completed')
    except:
        return "There was some problem deleting that task!"

#DELETE a task from ongoing page
@app.route('/delete_ongoing/<int:id>')
def delete_ongoing(id):
    task_to_delete = ToDo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/Ongoing')
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
            return redirect('/Ongoing')
        except:
            return "There was some problem deleting that task!"
    else:
        return render_template('update.html', task = task_to_update)

#Mark a task as DONE from Main Page
@app.route('/done/<int:id>')
def done(id):
    task_done = ToDo.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.completed = True                      #Set the status to completed
    task_done.ongoing = False                       #Remove ongoing status
    task_done.date_done = datetime.utcnow()
    try:
        db.session.commit()
        return redirect('/Completed')
    except:
        return render_template("404.html")

#Mark a task as DONE from Ongoing Tasks
@app.route('/done_ongoing/<int:id>')
def done_ongoing(id):
    task_done = ToDo.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.ongoing = False                       #Remove ongoing status
    task_done.completed = True                      #Set the status to completed
    task_done.date_done = datetime.utcnow()         #Time the task was completed
    try:
        db.session.commit()
        return redirect('/Completed')
    except:
        return render_template("404.html")

#Mark a task as ONGOING still ...
@app.route('/current/<int:id>')
def current(id):
    task_done = ToDo.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.completed = False
    task_done.ongoing = True                      #Set the status to completed
    try:
        db.session.commit()
        return redirect('/Ongoing')
    except:
        return render_template("404.html")

#Mark a task as ONGOING from Completed List
@app.route('/current_ongoing/<int:id>')
def current_ongoing(id):
    task_done = ToDo.query.get_or_404(id)           #Retrieve the task to be updated
    task_done.ongoing = True                      #Set the status to completed
    task_done.completed = False
    try:
        db.session.commit()
        return redirect('/Ongoing')
    except:
        return render_template("404.html")

#Imams
@app.route('/imam')
def imam():
    return render_template('imam.html')

@app.route('/Photos')
def Photos():
    return render_template('Photos.html')

@app.route('/Sounds')
def Sounds():
    return render_template('Sounds.html')

if __name__ == '__main__':
    app.run(debug=True)