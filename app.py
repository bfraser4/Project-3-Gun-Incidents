from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, request, jsonify, g
from flask import render_template
from datetime import time
import json
import sqlite3
import numpy as np



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
if __name__ == '__main__':
    app.run(debug=True)
