class Student:
    def __init__(self,name, maths, eng, kis, bio, chem):
        self.name = name
        self.maths = maths
        self.eng = eng
        self.kis= kis
        self.bio = bio
        self.chem = chem
    
    def __str__(self):
        return f"Student Name: {self.name} \nAverage {self.average()}"
    
    def average(self):
        total = self.maths + self.bio + self.chem + self.eng + self.kis
        return total/5
    
    @staticmethod
    def rank (students):
        students.sort(key=lambda x: x.average(), reverse=True)
        f = open("results.txt", 'w')
        f.write("**** RESULTS ****\n")
        f.write("")
        count = 1
        for student in students:
            f.write(f" {count}. Name: {student.name} - {student.average()} \n")
            count += 1
        f.close()

student_list = []

while True:
    name =  input("Enter student name or Enter q to exit: ")
    if name == "q":
        break

    maths = int(input("Enter Math marks: "))
    eng = int(input("Enter English marks: "))
    kis= int(input("Enter Kiswahili marks: "))
    bio = int(input("Enter Kiswahili marks: "))
    chem = int(input("Enter Kiswahili marks: "))

    std = Student(name, maths, eng, kis, bio, chem)
    student_list.append(std)

Student.rank(student_list)