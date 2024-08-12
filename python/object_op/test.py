product = {'name':'Tea', 'price':'150', 'category':'beverages'}

location = 'Kenya'

product_object = {'product':product, 'location':location}
product_object1 = {'product':product, 'location':location}
product_object2 = {'product':product, 'location':location}

orders = [product_object, product_object1, product_object2]

for order in orders:
    print(order)