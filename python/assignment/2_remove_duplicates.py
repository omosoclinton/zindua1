'''
Write a Python program to remove duplicates from a list.
'''

def remove_duplicates(list):
    result = []
    for string in list:
        if string not in result:
            result.append(string)
    return result



list = ["red", "red", 'black', 'yellow', 'blue', 'blue']
new_list = remove_duplicates(list)

print(new_list)