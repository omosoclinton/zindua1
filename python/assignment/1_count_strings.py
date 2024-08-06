'''
Write a Python program to count the number of strings from a given list of strings. 
The string length is 2 or more and the first and last characters are the same.
Sample List : ['abc', 'xyz', 'aba', '1221']

'''

def count_strings(list):
    new_list = [string for string in list if len(string) >= 2 and string[0] == string[-1]]
    return new_list

list = ['abc', 'xyz', 'aba', '1221']
print("Number of strings are: ", len(count_strings(list )))