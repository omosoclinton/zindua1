'''
Write a function to get sum of numbers in a list
'''

def sumOfList(list):
    sum = 0
    for num in list:
        sum += num
    return sum

print(sumOfList([60,80,90]))