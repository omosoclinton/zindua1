# fruits = ["avocado", "orange", "guava", "pear", "Cherry"]


# new_list = [fruit for fruit in fruits]
# numbers = [x for x in range(10) if x%2 == 0]

# print(numbers)

list_names = ['Jane', "Dan", "Alvin", "Ben", "Christopher"]

new_list = [name.upper() for name in list_names if len(name) <= 4 and name[-1]=='n' ]
print(new_list)