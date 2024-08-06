
'''
2^0 = 1
2^1 = 2
2^2 = 4
2^3 = 8
'''




number = int(input("Enter a number: "))
power = int(input("Enter a power for the number: "))

def getPower(a, n):
    if (n == 0):
        result = 1
    else:
        result = a * getPower(a, n-1)
    return result
    
print(getPower(number, power))