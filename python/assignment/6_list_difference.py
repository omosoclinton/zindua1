'''
Write a Python program to calculate the difference between the two lists.

'''

def list_difference(list1, list2):
    diff1 = [diff for diff in list1 if diff not in list2]
    diff2 = [diff for diff in list2 if diff not in list1]
    new_list =  diff1+diff2


    return  new_list

print(list_difference([1,2,3,4], [3,4,5,6,7,8]))

