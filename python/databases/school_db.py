'''
create database school
students table - fname, lname, course(foreign key from course table)
teachers - fname, lname, course (fk from course table)
courses - name, departnment (fk from department)
department - name
'''

'''
from mysql.connector import connect, Error

try:
    with connect(
        host="localhost",
        user="root",
        password="quinton2004"
    ) as connection:
        create_db_query = "CREATE DATABASE school"
        with connection.cursor() as cursor:
            cursor.execute(create_db_query)
except Error as e:
    print(e)

'''

import mysql.connector

mydb = mysql.connector.connect (
    host="localhost",
    user="root",
    password="quinton2004",  
    database="school"
)

mycursor = mydb.cursor()
#mycursor.execute("CREATE TABLE stores(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), location VARCHAR(255), address VARCHAR(255))")
#mycursor.execute("CREATE TABLE department(id INT AUTO_INCREMENT PRIMARY KEY, depart_name VARCHAR(255))")
#mycursor.execute("CREATE TABLE students(student_id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255), course_id INT)")
#mycursor.execute("CREATE TABLE course(course_id INT AUTO_INCREMENT PRIMARY KEY, course_name VARCHAR(255))")
#ycursor.execute("CREATE TABLE teacher(teacher_id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255), course_id INT)")
mycursor.execute("ALTER TABLE course ADD CONSTRAINT department VARCHAR(255)")

sql = "INSERT INTO students (first_name, last_name, course_id) VALUES(%s, %s, %s)"
val = [
    ('Jayden', 'Kababa', 1),
    ('Tristan','Jons',2),
    ('Ivy','Red',3),
    ('Chris','Lenku', 2),
    ('Terrence','Borin', 1),
    ('Daudi','Msalaba', 2),
    ('Mativoi','Mauzo', 3),
    ('Jumanji','Gamer', 3)
    ]
#mycursor.executemany(sql,val)


mydb.commit()