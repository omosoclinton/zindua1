'''
import math

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    @classmethod
    def fromPolar(cls, radius, angle):
        return cls(radius * math.cos(angle), radius * math.sin(angle))
    
    @staticmethod
    def angle(x):
        return math.atan(x)
    
pi = math.pi
p1 = Point(3,2)
p2 = Point.fromPolar(3, pi/4)

angle = Point.angle(3)


class Parent:
   _class_name = "Parent"

   @staticmethod
   def print_name():
       print(Parent._class_name)


class Child(Parent):
   _class_name = "Child"

   @staticmethod
   def print_name():
       print(Child._class_name)


Parent.print_name()
Child.print_name()

''' 
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