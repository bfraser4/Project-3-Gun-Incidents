from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import html
from flask import Flask, request, jsonify, render_template, Response,redirect, send_from_directory,abort
from datetime import time
import json
import sqlite3
import numpy as np
import csv
import os

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///incidents.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
Base.classes.keys

# # Save reference to the table
Incidents = Base.classes.Incidents

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

app.config["CLIENT_CSV"] = "D:/UCIBootcamp/Project-3-Gun-Incidents/static/data"
# filePath = './static/data/bluered.csv'

@app.route('/data/<csv_filename>',methods = ['GET','POST'])
def bluered (csv_filename):
    try:
        return send_from_directory(app.config["CLIENT_CSV"], filename=csv_filename, as_attachment=True)
    except FileNotFoundError:
        abort(404)

with open('./static/json/election.json', 'r') as f:
    table1 = json.loads(f.read())
# 
@app.route('/election.json', methods=['GET'])
def election():
    return jsonify(table1)

with open('./static/json/gz_2010_us_040_00_500kjm.json', 'r') as f:
    table2 = json.loads(f.read())
# 
@app.route('/gz_2010_us_040_00_500kjm.json', methods=['GET'])
def geo():
    return jsonify(table2)


with open('./static/json/state_data.geojson', 'r') as f:
    table3 = json.loads(f.read())
# 
@app.route('/state_data.geojson', methods=['GET'])
def geo2():
    return jsonify(table3)

with open('./static/js/us_per_capita.geojson', 'r') as f:
    table4 = json.loads(f.read())
# 
@app.route('/us_per_capita.geojson', methods=['GET'])
def geo3():
    return jsonify(table4)



with open('./static/js/firearm_suicides.json', 'r') as f:
    table5 = json.loads(f.read())
# 
@app.route('/firearm_suicides.json', methods=['GET'])
def geo4():
    return jsonify(table5)



with open('./static/js/firearm_homicide.json', 'r') as f:
    table6 = json.loads(f.read())
# 
@app.route('/firearm_homicide.json', methods=['GET'])
def geo5():
    return jsonify(table6)




#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/state_data<br/>"
        f"/Graphic1<br/>"
        f"/extraChart<br/>"
    )


@app.route("/api/state_data")
def data():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    """Return a list of all State data"""
    # Query all state data
    results = session.query(Incidents.State, Incidents.FirstYear, Incidents.LastYear, \
    Incidents.InjuryIncident, Incidents.TotalDeaths, Incidents.AvgYearlyDeaths, \
    Incidents.Population, Incidents.Rate).all()
    session.close()
    

    data = list(np.ravel(results))

        # Create a dictionary from the row data and append to a list of all_passengers
    all_states = []
    for state, f_year, l_year, injury, t_deaths, y_deaths, population, rate in results:
        state_dict = {}
        state_dict["State"] = state
        state_dict["FirstYear"] = f_year
        state_dict["LastYear"] = l_year
        state_dict["InjuryIntent"] = injury
        state_dict["TotalDeaths"] = t_deaths
        state_dict["AvgYearlyDeaths"] = y_deaths
        state_dict["Population"] = population
        state_dict["Rate"] = rate
        all_states.append(state_dict)
        print(all_states)


    # return jsonify(all_states)
    return jsonify(data)




@app.route("/Graphic1")
def graphic1():
    return render_template("Graphic1.html")
@app.route("/Graphic2")
def graphic2():
    return render_template("Graphic2.html")
@app.route("/Graphic3")
def graphic3():
    return render_template("Graphic3.html")
@app.route("/home")
def home():
    return render_template("Gun-Violence-In-The-USA_Home.html")  

@app.route("/extraChart")
def graphic4():
    return render_template("linechart.html")

if __name__ == '__main__':
    app.run(debug=True)
