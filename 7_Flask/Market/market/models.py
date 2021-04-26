from market import db, login_manager
from market import bcrypt
from flask_login import UserMixin

#This is important to take care of the user sessions
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

#Main user model
class User(db.Model, UserMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(length=30), nullable=False, unique=True)
    email = db.Column(db.String(length=50), nullable=False, unique=True)
    password = db.Column(db.String(60), nullable=False)
    budget = db.Column(db.Integer, nullable=False, default = 1000)
    items = db.relationship('Item', backref = 'owned_user', lazy=True)

#Main item model
class Item(db.Model):
    __tablename__ = 'item'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(length=30), nullable=False, unique=True)
    price = db.Column(db.Integer(), nullable=False)
    barcode = db.Column(db.String(length=12), nullable=False, unique=True)
    description = db.Column(db.String(length=1024), nullable=False, unique=True)
    owner = db.Column(db.Integer, db.ForeignKey('user.id'))
    def __repr__(self):
        return f'Item {self.name}'