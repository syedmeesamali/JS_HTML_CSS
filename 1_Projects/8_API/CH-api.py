import requests
r = requests.get('https://api.companieshouse.gov.uk/company/00002065', auth=('--mykey--',''))
print(r.text)
