
import mysql.connector

mydb = mysql.connector.connect (
    host="localhost",
    user="root",
    password="quinton2004",  
    database="users"
)

mycursor = mydb.cursor()

def register_db(username, password, register_window, login):
    #mycursor.execute("CREATE TABLE IF NOT EXISTS users (username VARCHAR(255), password VARCHAR(255))")
    sql = ("INSERT INTO users(username, password) VALUES(%s, %s)")
    val = (username, password)
    mycursor.execute(sql, val)

    register_window.destroy()

    login()
    mydb.commit()
