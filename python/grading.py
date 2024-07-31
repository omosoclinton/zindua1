'''
prompt user for five subjects
get aveearge
based on average:
A - 81 and above 
B - 71 to 80
C - 61 to 70
D - 51 to 60
E below 50

display the results
'''
print("*******GRADER******")
print("      *******     ")

bio = int(input("Enter your Biology Score: "))
chem = int(input("Enter your Chemistry Score: "))
phy = int(input("Enter your Physics Score: "))
math = int(input("Enter your Math Score: "))
english= int(input("Enter your English Score: "))

max_subject = max(bio, chem, phy, math, english)

print()
print()


total_marks = bio + chem + phy + math + english
average = total_marks/5

if(average > 80):
    print(f"Your average is {average} and grade is A. Your best perfoming subject is {max_subject}")
elif(average > 70):
    print(f"Your average is {average} and grade is B. Your best perfoming subject is {max_subject}")
elif(average > 60):
    print(f"Your average is {average} and grade is C. Your best perfoming subject is {max_subject}")
elif(average > 50):
    print(f"Your average is {average} and grade is D. Your best perfoming subject is {max_subject}")
else:
    print(f"Your average is {average} and grade is E. Your best perfoming subject is {max_subject}")

