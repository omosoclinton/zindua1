alphabet ='abcdefghijklmnopqrstvuwxyz'

for char in alphabet:
    # print(char.upper())
    pass


name = "maryanne"
print(name[::-1])
length = len(name) #8


for a in range(length-1 , -1, -1):
    print(name[a], end='')