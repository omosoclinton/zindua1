fruits = ('Apple', 'Orange', 'Pineapple', 'Banana', 'Guava', ['kitu', 'ingine'])

cars = ('toyota', 'isuzu', 'mazda', 'Tata', 'nissan', 'tesla','ford')

*car1, car2, car3  = cars

''' 
for car in cars:
    if car == 'isuzu':
        print(car)


i = 0
while i < len(cars):
    print(cars[i])
    i+=1
    '''
new_cars = cars * 2
print(new_cars)

user =  [("Name", 'Jane'), ("Age", '24'), ('County', 'Nairobi'), ('Profession', 'Lawyer')]


user_dict = {}
for tuple in user:
    user_dict[tuple[0]] = tuple[1]

print(user_dict)
