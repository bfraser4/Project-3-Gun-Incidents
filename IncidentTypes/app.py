from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, request, jsonify, g
import json
import sqlite3


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///incidents.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# # Save reference to the table
Incidents = Base.classes.keys

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
        f"/api/v1.0/state_data<br/>"
    )


@app.route("/api/v1.0/state_data")
def data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all State data"""
    # Query all state data
    results = session.query(Incidents.State)

    session.close()

    # Convert list of tuples into normal list
    # all_states = list(np.ravel(results))

        # Create a dictionary from the row data and append to a list of all_passengers
    all_states = []
    for state, f_year, l_year, injury, t_deaths, y_deaths, population in results:
        state_dict = {}
        state_dict["State"] = state
        state_dict["First Year"] = f_year
        state_dict["Last Year"] = l_year
        state_dict["Injury Intent"] = injury
        state_dict["Total Deaths (#)"] = t_deaths
        state_dict["Avg. Yearly Deaths (#)"] = y_deaths
        state_dict["Population"] = population
        all_states.append(state_dict)

    return jsonify(all_states)

if __name__ == '__main__':
    app.run(debug=True)
