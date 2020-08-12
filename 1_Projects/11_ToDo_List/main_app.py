import helper
from flask import *
import json

app = Flask(__name__)
app.config['DEBUG'] = True

#Below is for the homepage
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/add_item', methods = ["POST"])
def add_item():
    req_data = request.get_json()
    item = req_data['item']

    #Add item to the list
    res_data = helper.add_to_list(item)

    #For error handling
    if res_data is None:
        response = Response("{'error': 'Item not found'")
        return response
    response = Response(json.dumps(res_data), mimetype='application/json')
    return response

if __name__ == "__main__":
    app.run()