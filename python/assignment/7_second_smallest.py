'''
Write a Python program to find the second smallest number in a list.

'''

list = [90, 5,1,2,3,4,5,6]

def list_order(list):

    for i in range(len(list)):
        for j in range(i+1, len(list)):
            if list[i] > list[j]:
                list[i], list[j] = list[j], list[i]

    return list

