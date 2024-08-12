'''
classes User, Product, ShoppingCart, Order

class User: username fname, lname
    Method: init, str
            addToCart(products)
            order(orderDetails, product)
            removeProduct
            cancelOrder
            completeOrder( change payment status)
            viewOrders
class Product: name, price, category
    Method:
            change productName, cahngePrice, changeCategory
class ShoppingCart: user,product
class Order: user, product, location, paymentStatus
'''


class User:
    def __init__(self, username, fname, lname):
        self.username = username
        self.fname = fname
        self.lname = lname
        self.cart = ShoppingCart(self)
        self.orders = []
    
    def __str__(self):
        return f"{self.username} - {self.fname} - {self.lname}"
    
    def addToCart(self, product):
        self.cart.addProduct(product)

    def order(self, location, product):
        order = Order(self, product, location)
        self.orders.append(order)
        self.cart.clearCart()

    def removeProduct(self, product):
        self.cart.removeProduct(product)

    def cancelOrder(self, order):
        self.orders.remove(order)

    def completeOrder(self, order):
        order.paymentStatus = 'Completed'

    def viewOrders(self):
        for order in self.orders:
            print(order.product)

class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

    def changeName(self, new_name):
        self.name = new_name

    def changePrice(self, new_price):
        self.price = new_price

    def changeCategory(self, new_category):
        self.category = new_category


class ShoppingCart:
    def __init__(self, user):
        self.user = user
        self.products = []
    
    def addProduct(self, product):
        self.products.append(product)

    def removeProduct(self, product):
        self.products.remove(product)

    def viewCart(self):
        for product in self.products:
            print(product)
    def clearCart(self):
        self.products.clear()


class Order:
    def __init__(self, user, product, location):
        self.user = user
        self.product = product
        self.location = location 
        self.paymentStatus = "pending"


user1 = User("joe2020", "Joe", "Biden")

product =  Product("buscopan", "20USD", "medicine")

user1cart = ShoppingCart(user1)

user1Order = Order(user1, product, "White House")

print(user1)
user1.order("Whitehouse", product)
user1.viewOrders()