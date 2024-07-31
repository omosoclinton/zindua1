'''
Tell a user to guess a number between 0 and 10
you have 5 trials
If you guess number befre 5 trials end, you win
'''


import random


x =  random.randint(0,10)

'''
count = 1
while count <= 5:
    user_input = int(input("Guess a number between 0 and 10: "))
    if x == user_input:
        print(f"You win. Number is {x}")
        break
    count += 1
if count > 5:
    print(f"You lost the number was {x}")
'''
count = 1
for n in range(1,6):
    user_input = int(input("Guess a number between 0 and 10: "))
    if x == user_input:
        print(f"You have won. The number is {x}")
        break


else:
     print(f"You have lost. The number was {x}")
    




