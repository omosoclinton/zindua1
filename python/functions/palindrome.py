
string = input("Enter a string: ")
def palinChecker(string):
    #something bob = bob
    if string[::-1] == string:
        print(f"{string} is palindrome")
    else:
        print(f"{string} is not palindrome")

palinChecker(string)



