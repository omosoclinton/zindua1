car = {
    "name":"Isuzu",
    "color":"red",
    "weight":"1T"
}
car["model"] = "FVR"

for key in car:
    print(f"{key} : {car[key]}")

print(len(car))

person = dict(name="Jon", age=21, gender="male")
print(person)

print(person.get('name'))
keys = list(person.values())
print(keys)
print(list(person.items()))

if "name" in person:
    print(person["name"])

    