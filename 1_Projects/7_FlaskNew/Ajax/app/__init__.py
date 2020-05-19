#import os
from flask import Flask
#from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

#from config import app_config

app=Flask(__name__, instance_relative_config=True)
# db = SQLAlchemy(app)
# migrate = Migrate(app, db)

from app import views
app.config.from_object('config')

# def create_app(config_name):
#     app = Flask(__name__, instance_relative_config=True)
#     app.config.from_object(app_config[config_name])
#     app.config.from_pyfile('config.py')
#     db.init_app(app)
#     @app.route('/')
#     def hello_world():
#         return 'Helllo world'

#     return app