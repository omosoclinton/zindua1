from datetime import datetime, timedelta
import mysql.connector

class DatabaseConnection:
    def __init__(self):
        self.connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="quinton2004",
            database="test_emp_mgt"
        )
        self.cursor = self.connection.cursor()
    def execute_query(self, query, params=None):
        self.cursor.execute(query, params)
        self.connection.commit()
    
    def fetch_query(self, query, params=None):
        self.cursor.execute(query, params)
        return self.cursor.fetchall()

db = DatabaseConnection()

class Department:
    def __init__(self, department_id, department_name):
        self.department_id = department_id
        self.department_name = department_name
        self.head_of_department = None
        self.employees = []

    def save_to_db(self):
        query = """
        INSERT INTO departments (department_id, department_name, head_of_department)
        VALUES (%s, %s, %s)
        """
        params = (self.department_id, self.department_name, None)
        db.execute_query(query, params)
    def update_head_in_db(self):
        query = '''
        UPDATE departments
        SET head_of_department = %s
        WHERE department_id = %s
        '''
        params = (self.head_of_department.employee_id, self.department_id)
        db.execute_query(query, params)

    def add_employee(self, employee):
        self.employees.append(employee)
        employee.department_id = self.department_id
        employee.save_to_db()
        print(f"{employee.name} added to {self.department_name}")

    def remove_employee(self, employee):
        self.employees = [emp for emp in self.employees if emp.employee_id != employee.employee_id]
        print(f"{employee.name} deleted from {self.department_name} department")
    def calculate_department_overtime(self):
        return sum(emp.calculate_overtime() for emp in self.employees)
    
    def assign_head_of_department(self, employee):
        if employee in self.employees:
            self.head_of_department = employee
            self.update_head_in_db()
            print(f"{employee.name} is now head of {self.department_name}")
        else:
            print(f"{employee.name} is not in this department")
    def list_employees(self):
        for emp in self.employees:
            print(f"{emp.name}")


class Employee:
    def __init__(self, employee_id, name, salary, role, hire_date, department):
        self.employee_id = employee_id
        self.name = name
        self.salary = salary
        self.role = role
        self.hire_date = hire_date
        self.department_id = department.department_id
        self.attendance_record = []

    def save_to_db(self):
        query = """
        INSERT INTO employees (employee_id, name, salary, role, hire_date, department_id)
        VALUES (%s, %s, %s, %s, %s, %s)

        """
        params = (self.employee_id, self.name, self.salary, self.role, self.hire_date, self.department_id)
        db.execute_query(query, params)
    def clock_in(self):
        clock_in_time = datetime.now()
        new_record = AttendanceRecord(self.employee_id, datetime.now().date(), clock_in_time, None, 0, 0)
        self.attendance_record.append(new_record)
        new_record.save_to_db()
        print(f"{self.name} clocked in at {clock_in_time}")

    def clock_out(self):
        clock_out_time = datetime.now()

        if self.attendance_record:
            last_record = self.attendance_record[-1]
            if last_record.clock_out_time is None:
                last_record.clock_out_time = clock_out_time
                last_record.calculate_overtime()
                last_record.update_in_db()
                print(f"{self.name} clocked out at {clock_out_time}")
            else:
                print(f"{self.name} has already clocked out")
        else:
            print("No clock in record found")
    def calculate_total_hours(self):
        return sum(record.total_hours for record in self.attendance_record)

    def calculate_overtime(self):
        return sum(record.overtime_hours for record in self.attendance_record)

class AttendanceRecord:
    def __init__(self,employee_id, date, clock_in_time,clock_out_time, total_hours, overtime_hours):
        self.employee_id = employee_id
        self.date = date
        self.clock_in_time = clock_in_time
        self.clock_out_time = clock_out_time
        self.total_hours = total_hours
        self.overtime_hours = overtime_hours 

    def save_to_db(self):
        query = """
        INSERT INTO attendance_records (employee_id, date, clock_in_time,clock_out_time, total_hours, overtime_hours)
        VALUES (%s, %s, %s, %s, %s, %s)

        """
        params = (self.employee_id, self.date, self.clock_in_time, self.clock_out_time, self.total_hours, self.overtime_hours)
        db.execute_query(query, params)

    def update_in_db(self):
        query = """
        UPDATE attendance_records 
        SET clock_out_time = %s, total_hours = %s, overtime_hours = %s
        WHERE employee_id =  %s AND date = %s

        """
        params = (self.clock_out_time,  self.total_hours, self.overtime_hours, self.employee_id, self.date, )
        db.execute_query(query, params)

    def calculate_total_hours(self):
        if self.clock_in_time and self.clock_out_time:
            self.total_hours = (self.clock_out_time - self.clock_in_time).total_seconds()/3600
            self.overtime_hours = max(0, self.total_hours - 8) 
 
    def calculate_overtime(self):
        if self.clock_out_time:
            self.calculate_total_hours()
            

    def is_absent(self):
        return self.clock_in_time is None



class EmployeeManagementSystem:
    def __init__(self):
        self.departments = []
        self.employees = []
        self.load_departments()
        self.load_employees() 
    def load_departments(self):
        #departments = []
        query = "SELECT department_id, department_name, head_of_department FROM departments"
        department_records = db.fetch_query(query)

        for record in department_records:
            department_id, department_name, head_of_department_id = record
            department = Department(department_id, department_name)
            if head_of_department_id:
                department.head_of_department = self.search_employee(head_of_department_id)
            self.departments.append(department)
        #return departments
    
    def load_employees(self):
        #employees = []
        query = "SELECT employee_id, name, salary, role, hire_date, department_id FROM employees"
        employee_records = db.fetch_query(query)

        for record in employee_records:
            employee_id, name, salary, role, hire_date, department_id = record
            department = next((dept for dept in self.departments if dept.department_id == department_id), None)
            employee = Employee(employee_id, name, salary, role, hire_date, department)
            self.employees.append(employee)

            if department:
                department.employees.append(employee)
        #return  employees
    

    def add_department(self, department):
        self.departments.append(department)
        department.save_to_db()
        print(f"created {department.department_name}")

    def add_employee(self, employee, department):
        self.employees.append(employee)
        department.add_employee(employee)
        print(f"{employee.name} added.")

    def delete_employee(self, employee_id):
        employee = self.search_employee(employee_id) 
        if employee:
            self.employees.remove(employee)
            for dept in self.departments:
                if employee in dept.employees:
                    dept.remove_employee(employee)
        
            query = "DELETE FROM employees WHERE employee_id = %s"
            db.execute_query(query, (employee_id,))
            print(f"{employee_id} has been deleted.")
        else:
            print(f"No employee found with id {employee_id}")

    def assign_head_of_department(self, employee, department):
        department.assign_head_of_department(employee)

    def update_employee(self, employee_id, **kwargs):
        for emp in self.employees:
            if emp.employee_id == employee_id:
                for key, value in kwargs.items():
                    setattr(emp, key, value)
                    query = f"UPDATE employees SET {key} = %s WHERE employee_id = %s"
                    db.execute_query(query, (value, employee_id))
                print(f"{employee_id} has been updated with {kwargs}")

    def search_employee(self, employee_id):
        for emp in self.employees:
            if emp.employee_id == employee_id:
                return emp
            
        return None

    def list_all_employee(self):
        for emp in self.employees:
            print(f"{emp.name} - {emp.employee_id}")

    def view_employee_details(self, employee_id):
        employee = self.search_employee(employee_id)
        if employee:
            print(f"Employee ID: {employee.employee_id}")
            print(f"Employee Name: {employee.name}")
            print(f"Employee Salary: {employee.salary}")
            print(f"Employee Role: {employee.role}")
            print(f"Employee Hire Date: {employee.hire_date}")
            #print(f"Employee Dept: {employee.department}")
        else:
            print("Employee not found")
        