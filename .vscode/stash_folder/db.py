import sqlite3

conn = sqlite3.connect('incidents.sqlite')

cursor = conn.cursor()

sql_query = """ CREATE TABLE incidents(
    State VARCHAR PRIMARY KEY,
    First Year INTEGER NOT NULL,
    Last Year INTEGER NOT NULL, 
    Injury Intent VARCHAR NOT NULL, 
    Total Deaths INTEGER NOT NULL, 
    Avg. Yearly Deaths INTEGER NOT NULL, 
    Population INTEGER NOT NULL, 
    Age-adjusted Rate (per 100,000) FLOAT NOT NULL
) """

cursor.execute(sql_query)