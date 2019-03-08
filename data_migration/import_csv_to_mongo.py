import os
import sys
import pandas as pd
import pymongo
import json



def import_content(filepath):
    mng_client = pymongo.MongoClient('mongodb://jcopela7:capstone123@ds225205.mlab.com:25205/capstone')
    mng_db = mng_client['capstone'] # Replace mongo db name
    collection_name = 'data' # Replace mongo db collection name
    db_cm = mng_db[collection_name]
    cdir = os.path.dirname(__file__)
    file_res = os.path.join(cdir, filepath)

    data = pd.read_csv(file_res)
    data_json = json.loads(data.to_json(orient='records'))
    db_cm.insert_many(data_json)

if __name__ == "__main__":
    # pass csv file path
    filepath = 'C:/Users/Jonathan/Documents/Year 5/Programming/capstone/data_migration/sample.csv'  
    import_content(filepath)