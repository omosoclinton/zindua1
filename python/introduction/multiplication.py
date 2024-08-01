'''
multiplication table
'''

number = int(input("Enter a number between 1 and 10: "))

for i in range(1, number+1):
    for j in range(1, number+1):
        print(i, 'X',j, '=',i*j)