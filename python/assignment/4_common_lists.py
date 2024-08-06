'''
Write a Python function that takes two lists and returns True if they have at least one common member.
'''

def common_lists(list1, list2):
    result = False
    for string in list1:
        for string1 in list2:
            if string == string1:
                result = True
                return result
    return result
list1 = ["red", 'blue1', 'yellow']
list2 = ["red1", 'blue', 'yellow2']

print(common_lists(list1,list2))
