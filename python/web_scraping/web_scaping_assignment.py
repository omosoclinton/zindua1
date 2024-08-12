'''
# use beautifulsoup to get the content of a web page = done
# store the html content in a html file = done
# use regex to extract all emails --
# print the list of emails
# use regex to extract all phome numbers
# print a list of all the phone numbers
phone_regex

'''

import requests 
from bs4 import BeautifulSoup
import re


url = 'https://moringaschool.com/'
email_regex = re.compile(r'[\w.-]+@[\w.-]+.\w+') 
phone_regex = re.compile(r'^(?:\+|0)?(?:254|0)?[17]\d{2}(?: \d{3}){2}$') 


response = requests.get(url)
content = BeautifulSoup(response.content, 'html.parser')

f = open('textFiles/moringa.html', 'w', encoding="utf-8")
f.write(str(content))
f.close

emails = email_regex.findall(content.get_text())
phones = phone_regex.findall(content.get_text())
print(emails)
print(phones)
