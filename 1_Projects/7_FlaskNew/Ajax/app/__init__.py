from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app=Flask(__name__, instance_relative_config=True)

from app import views
app.config.from_object('config')