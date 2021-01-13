#Import libraries
import time
from datetime import datetime as dt

#Path to host file, redirect to local server
host_path = "C:\Windows\System32\drivers\etc\hosts"
redirect = "127.0.0.1"
website_list = ["www.netflix.com", "www.facebook.com", "facebook.com"]

#Condition
while True:
    #Check for current time
    if dt(dt.now().year, dt.now().month, dt.now().day, 8) < dt.now() < dt(dt.now().year, dt.now().month, dt.now().day, 16):
        print("Rihanna")
        time.sleep(5)
        #Open file and read the contents
        file = open(host_path, 'r+')
        content = file.read()
        for website in website_list:
            if website in content:
                print("Website blocked: " + website)
                pass
            else:
                #Write the IP of localhost and name of website to block
                file.write(redirect + " " + website + "\n")
    else:
        print("Drake")
        #Open host file and read content from it - line by line
        file = open(host_path, 'r+')
        content = file.readlines()
        #Take pointer to start of file
        file.seek(0)
        for line in content:
            if not any(website in line for website in website_list):
                file.write(line)
        file.truncate()
    time.sleep(5)
        
