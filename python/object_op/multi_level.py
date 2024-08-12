class Person:
    def __init__(self, fname, lname):
        self.fname = fname
        self.lname = lname

class Student(Person):
    def __init__(self, fname, lname, course, level):
        Person.__init__(self, fname, lname)
        self.course = course
        self.level = level

class Teacher(Person):
    def __init__(self, fname, lname, empNumber):
        Person.__init__(self, fname, lname)
        self.empNumber = empNumber

class LecAssistant(Teacher, Student):
    def __init__(self, fname, lname, empNumber, course, level, teachingCourse):
        Teacher.__init__(self, fname, lname, empNumber)
        Student.__init__(self, fname, lname, course, level)
        self.teachingCourse = teachingCourse


assistant = LecAssistant('Kamu', 'Johnny', '2005', 'IT Law', 'MSC', 'IT Ethics')

print(assistant.teachingCourse)
