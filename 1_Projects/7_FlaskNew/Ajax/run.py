#import os
from app import app

#config_name = os.getenv('FLASK_CONFIG')
#app = app(config_name)

if __name__ == '__main__':
    app.run(debug=True)

