import pandas as pd
import numpy as np
import sqlite3
from sqlalchemy import create_engine
csv_database = create_engine('sqlite:///csv_database.db')
chunksize = 10000
i=0
j=0
for df in pd.read_csv('./part6_6.csv', chunksize = chunksize, iterator = True):
   df.index += j
   df.to_sql('data_use', csv_database, if_exists = 'append')
   j = df.index[-i] + 1
   print("| Index: {}".format(j))
