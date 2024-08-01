'''
prime numbers = number is only divisible by 1 and itself


number = int(input("Enter a number to find if it is a prime number: "))

if (number == 2 or number == 3):
    print(f"{number} is a prime number")
elif (number%2 == 0 or number%3 == 0):
    print(f'{number} is not a prime number')
else:
    print(f"{number} is a prime number")

'''
import math
number = int(input("Enter a number: "))

if number < 2:
    print(f" {number} is not a prime number")
    exit()

i = 2
while i*i <= number:
    print(f"{number} % {i} = {number%i}")
    if number % i == 0:
        print(f"{number} is not a prime number")
        exit()
    i= i+1
print(f"{number} is a prime number")



