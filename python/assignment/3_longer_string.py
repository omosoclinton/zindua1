'''
Write a Python program to find the list of words that are longer than n from a given list of words.
'''

def longer_string(list, n):
    new_list = [string for string in list if len(string) > n ]
    return new_list


n = 3
print(longer_string(['abc', 'xyz', 'aba', '1221'], n))