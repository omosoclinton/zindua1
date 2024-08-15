'''
Write a Python program to create a class representing a Circle.
Include methods to calculate its area and perimeter. 
'''
import math

class Circle:
    pi = math.pi
    def __init__(self,radius):
        self.radius = radius

    def circumference(self):
        return 2*self.pi*self.radius
    def area(self):
        return 2*self.pi*self.radius**2
    
circle = Circle(7)
print(circle.area())