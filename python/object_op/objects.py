'''

Object Oriented Python
'''
# Class car
class Car:
    def __init__(self, color, price, mlg=0):
        self.color = color
        self.price = price
        self.mlg = mlg
    def __str__(self):
        return f"Color - {self.color}\nPrice - {self.price} ksh\nMileage - {self.mlg} kms"
    
    def calculate_current_price(self):
        return self.price * 10000/self.mlg
    
    def increase_price(self, increase):
        self.price = self.price * (100 + increase)/100



car1 = Car('Blue', 250000, 60000)
car2 = Car('Black', 290000, 80000)
car3 = Car('Brown', 200000, 68000) # instances of class Car

car1.increase_price(10)
# print(car1)

# Class Person
class Person:
    def __init__(self, name, age, school, country, profession):
        self.name = name
        self.age = age
        self.school = school
        self.country = country
        self.profession = profession
    def __str__(self):
        return f"Name - {self.name}\nSchool - {self.school} \nCountry of origin - {self.country}"

person1 = Person("Clinton", 28, "Zindua", "Botswana", "Engineer")


# Class student


