import pandas as pd
import sqlite3

df = pd.read_sql_query('SELECT * FROM data_use WHERE CompanyName = ZORAIZ MEDICAL SERVICES LTD', csv_database.db)
