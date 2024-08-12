import random
class Bank:
    users = []
    def __init__(self):
        pass
    def addUser(self, user):
        self.users.append(user)
    def getUserByAccountNumber(self, accountNumber):
        pass

class BankUser:
    def __init__(self, username, pin):
        self.username = username
        self.accountNumber = random.randint(100000, 999999)
        self.pin = pin
        self.balance = 0

    def deposit(self, amount, pin):
        if pin == self.pin:
            if amount > 0:
                self.balance += amount
                print(f"You have deposited {amount}. Your new balnce is {self.balance}")
            else:
                print("You have entered an invalid amount.")
        else:
            print("Wrong pin")
    def withdraw (self, amount, pin):
        if pin == self.pin:
            if amount > 0:
                if amount > self.balance:
                    print(f"You have insufficient balance. Balnce is {self.balance}")
                else:
                    self.balance -= amount
                    print(f"You have withdrwan {amount}. Your new balnce is {self.balance}")
            else:
                print("You have entered an invalid amount.")
        else:
            print("Wrong pin")
    def transfer (self, amount, pin):
        if pin == self.pin:
            if amount > 0:
                if amount > self.balance:
                    print(f"You have insufficient balance. Balnce is {self.balance}")
                else:
                    self.balance -= amount
                    print(f"You have transferes {amount}. Your new balnce is {self.balance}")
            else:
                print("You have entered an invalid amount.")
        else:
            print("Wrong pin")