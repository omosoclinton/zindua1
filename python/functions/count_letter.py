'''
A function that counts number of instances of each letter in a string  and returns a dictionary 
  


damaris - 
{
    "d":1
    "a":2

}
'''

letter_dict = {}

def countLetters(string):
    for i in string:
        if i in letter_dict:
            letter_dict[i]+=1
        else:
            letter_dict[1]
    #n+=1
    return letter_dict

dict = countLetters("damarisa")
print(dict)