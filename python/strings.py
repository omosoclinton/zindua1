name = "This is Nairobi"
description = 'City in the sun'
code = 47

print(name, description, code)

city, country = "Nairobi", "Kenya"
a,b,c,d = 1,2,3,4

print(d)


print(f"{a} + {b} = {a+b}")
new_name = name.replace("Nairobi", "Mombasa")

print(new_name)

names = "Kenya, Nairobi, Mombasa, Eldoret"
names_list = names.split(', ')
print("Kenya" in names_list)