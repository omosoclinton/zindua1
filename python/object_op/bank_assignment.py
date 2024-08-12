'''
Use Python OOP to create a banking system:
# create a banking system - 
# create a class User - done
# The class should have the following fields:  name, accountNumber) balance = 0 - done
# The accountNumber should be a random 6 digit number - done
# The balance should be default zero - done

    create a banking system
# Have the following methods:
## deposit: takes an amount as a parameter and updates the user's balance. Prints the deposit success message: 
   "You have successfully  deposited {amount}. New balance is {balance}" - done

## getBalance: return the user's balance - done

## withdraw: takes an amount as a parameter and updates the user's balance. Prints the withdraw success message: 
   "You have successfully  withdrawn {amount}. New balance is {balance}" - done

## transfer : another user as an argument: updates the two users' balances. print to the user: 
    Successfully transferred {amount} to user's name. Balance is {balance}
# create 4 dummy users for testing
'''
from random import randrange

class Bank:
    accountNumber = randrange(100000,999999,6)
    def __init__(self, name, balance=0):
        self.name = name
        self.accountNumber = randrange(100000,999999,6)
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"You have successfully  deposited {amount}. New balance is {self.balance}")


    def getBalance(self):
        return self.balance
    
    def withdraw(self, amount):
        self.balance -= amount
        print(f"You have successfully  withdrwan {amount}. New balance is {self.balance}")


    def transfer(self, user, amount):
        self.balance -= amount
        user.deposit(amount)
        print(f"Successfully transferred {amount} to user's {user.name}. Balance is {self.balance}")


# user1 = Bank("James")
# user2 = Bank("Kamau")

users_list = []

while True:
    name = input("Enter your name: or Q to quit ").lower()
    if name == 'q':
        break
    
    user = Bank(name)
    users_list.append(user)

   


while True:
    print("Welcome to the Bank.")
    user_name = input("Enter name to continue: or Q to quit ").lower()
    if user_name == 'q':
        break

    for user in users_list:

        if user.name == user_name:
            state = input("Enter D to deposit or W to Withdraw or T to transfer: ")
        
            if state == 'D':
                amount = int(input("Enter Amount to deposit: "))
                user.deposit(amount)
            elif state == 'W':
                amount = int(input("Enter Amount to withdraw: "))
                user.withdraw(amount)
            elif state == 'T':
                amount = int(input("Enter Amount to withdraw: "))
                name = input("Enter user to transfer to: ").lower
                break
        else:
            print("Not registered")


for user in users_list:
    print(user.name,'-' ,user.accountNumber, '-', user.getBalance())


    

