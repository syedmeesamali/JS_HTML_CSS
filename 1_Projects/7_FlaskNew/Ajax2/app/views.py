from flask import  Flask, render_template, request, jsonify, make_response
from app import app
import os
from datetime import datetime


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/api', methods=['POST'])
def api(): 
    currency = request.form.get("currency")
    res = request.get("http://api.fixer.io/latest", params = {"base": "USD", "symbols": currency})
    
    #Check for success
    if res.status_code != 200:
        return jsonify({"Success": False})

    #Make sure currrency is there
    data = res.json()
    if currency not in data["rates"]:
        return jsonify({"Success": False})

    return jsonify({"Success": True, "rate": data["rates"][currency]})
