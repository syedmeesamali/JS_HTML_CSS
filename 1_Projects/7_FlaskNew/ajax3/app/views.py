from flask import  Flask, render_template, request, jsonify
import requests
from app import app

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/convert", methods=["POST"])
def convert(): 
    currency = request.form.get("currency")
    res = requests.get("https://api.exchangeratesapi.io/latest", params = {
        "base": "USD", "symbols": currency})
    #Check for success
    if res.status_code != 200:
        return jsonify({"success": False})
    data = res.json()
    return jsonify({"success": True, "rate": data["rates"][currency]})
