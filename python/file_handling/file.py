import os

f = open('../file.txt', 'a')

user_input = input("Write to file: ")
f.write('\n'+user_input)

f.close()

f1 = open('../file.txt', 'r')

print(f1.read())