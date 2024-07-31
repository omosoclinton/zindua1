print("Choose operation")
print("1, Division")
print("2, Multiplication")
print("3, Addition")
print("4, Subtraction")

choice = int(input("Enter your choice: "))

number1 = int(input("Enter first Number: "))
number2 = int(input("Enter second Number: "))

if (choice == 1):
    print(f"Your answer is: {number1/number2}")
elif (choice == 2):
    print(f"Your answer is: {number1*number2}")
elif (choice == 3):
    print(f"Your answer is: {number1+number2}")
elif (choice == 4):
    print(f"Your answer is: {number1-number2}")
else:
    print("Invalid choice")
