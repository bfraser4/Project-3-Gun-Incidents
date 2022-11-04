import csv
import json

# csvFilename = 'firearm_homicides.csv'
# jsonFilename = 'data.json'

def convjson(csvFilename, jsonFilename):
    mydata = {}

    with open(csvFilename, encoding = 'utf-8') as csvfile:
        csvRead = csv.DictReader(csvfile)

        for rows in csvRead:
            mykey = rows['Injury_Intent', 'State', 'Year', 'Total_Deaths']
            mydata[mykey] = rows
    
    with open(jsonFilename, 'w', encoding='utf-8') as jsonfile:
        jsonfile.write(json.dumps(mydata, indent=4))

csvFilename = r'firearm_suicides.csv'
jsonFilename = r'data.json'

convjson(csvFilename, jsonFilename)