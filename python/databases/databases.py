import mysql.connector

mydb = mysql.connector.connect (
    host="localhost",
    user="root",
    password="quinton2004",  
    database="shop"
)

mycursor = mydb.cursor()
#mycursor.execute("CREATE TABLE users (username VARCHAR(255), first_name VARCHAR(255), last_name VARCHAR(255))")
#mycursor.execute("CREATE TABLE stores(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), location VARCHAR(255), address VARCHAR(255))")
#mycursor.execute("CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))")
#mycursor.execute("CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), category VARCHAR(255), price FLOAT)")
#mycursor.execute("INSERT INTO customers(name, address) VALUES( 'Kama', '2 Thika Rd' )")
#mycursor.execute("INSERT INTO products(name, category, price) VALUES('Lawn Mower', 'Farm Machinery', 60000)")
#mycursor.execute("INSERT INTO stores(name, location, address ) VALUES('Ufanisi Store', 'Utawala', 'Utawala, Mihango')")
sql = "INSERT INTO users(username, first_name, last_name, city) VALUES(%s, %s, %s, %s)"
val = [
    ('Jomo23', 'Jomo', 'Kenyatta', 'Nakuru'),
    ('PaulN', 'Paul', 'Ngei', 'Kitui'),
    ('DedanMau', 'Dedan', 'Kimathi', 'Kiambu')
    ]
#mycursor.executemany(sql,val)
#mycursor.execute("ALTER TABLE users ADD city VARCHAR(255) DEFAULT 'Nairobi' ")
mycursor.execute("UPDATE users SET city='Kisumu' WHERE id='4'")
mycursor.execute("SELECT * FROM users")
#mydb.commit()
users = mycursor.fetchall()

for user in users:
    print(user)

