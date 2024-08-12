import requests

import re
from bs4 import BeautifulSoup

url = 'https://www.hubertiming.com/home'
response = requests.get(url)
content = BeautifulSoup(response.content, "html.parser")

f = open('textFiles/web.html', 'w')
f.write(str(content))


# for link in link_tags:
#     print(link.get('href'))
email = 'omera@user.com'

email_pattern = r'(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)'
emails = re.findall(email_pattern, email)

print(emails)

