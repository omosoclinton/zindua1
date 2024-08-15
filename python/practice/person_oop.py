'''

Write a Python program to create a person class. 
Include attributes like name, country and date of birth. 
Implement a method to determine the person's age. 

'''

class Person:
    current_year = 2024
    def __init__(self, name, country, dob):
        self.name = name
        self.country = country
        self.dob = dob

    def age(self):
        return self.current_year - self.dob
    

person1 = Person("John", "Kenya", 1996)
print(person1.age())
    