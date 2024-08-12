#Inheritance

class Person:
    def __init__(self, fName, lName):
        self.fName = fName
        self.lName = lName
    def printDetails(self):
        print(f"{self.fName} = {self.lName}")

class Student(Person):
    def __init__(self, fName, lName, course):
        Person().__init__(fName, lName)
        self.course = course
    def printDetails(self):
        print(f"{self.fName} = {self.lName} - {self.course}")

    def changeCourse(self, newCourse):
        self.course = newCourse
        print(f"New course is {self.course}")

class CourseStudent(Student):
    def __init__(self, fName, lName, course, grade):
        Student().__init__(fName, lName, course)
        self.grade = grade

student = Student("John", "Doe", 'IT')
student.changeCourse("Law")
student.printDetails()