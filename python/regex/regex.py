import re
text = 'The footballers  from Kenya are expected to the next level'


number = "0724035823"

pattern = r'^07|01|.*\d{8}'
x = re.search(pattern, number)
print(x)