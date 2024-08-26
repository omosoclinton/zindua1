from ems import EmployeeManagementSystem, Employee, Department

def admin_interface(ems):
    while True:
        print("\n****Admin Menu***")
        print("1. Add Department")
        print("2. Add Employee")
        print("3. Assign Head of Department")
        print("4. View all Employees")
        print("5. Update Employee")
        print("6. Delete Employee")
        print("7. Logout")

        choice = input("Choose an Option: ")
        if choice == "1":
            department_id = int(input("Enter Department ID: "))
            department_name = input("Enter department Name: ")
            department = Department(department_id, department_name)
            ems.add_department(department)
        elif choice == "2":
            employee_id = int(input("Enter Employee ID: "))
            name = input("Enter Employee Name: ")
            salary = input("Enter salary: ")
            role = input("Enter Employee's role: ")
            hire_date = input("Enter Employee's hire date(YYYY-MM-DD): ")
            department_id = int(input("Enter Department ID: "))
            department = next((dept for dept in ems.departments if dept.department_id == department_id), None)

            if department:
                employee = Employee(employee_id, name, salary, role, hire_date, department)
                ems.add_employee(employee, department)
                print(f"{employee.name} added succesfully")
            else:
                print("Department not found")
        elif choice == "3":
            employee_id = int(input("Enter Employee ID: "))
            employee = ems.search_employee(employee_id)
            if employee:
                department_id = int(input("Enter department ID: "))
                department = next((dept for dept in ems.departments if dept.department_id == department_id), None)

                if department:
                    ems.assign_head_of_department(employee, department)
                else:
                    print("Department not found")
            else:
                print("Department not found")
        
        elif choice == "4":
            ems.list_all_employee()

        elif choice == "5":
            employee_id = int(input("Enter Employee ID to update: "))
            name = input("Enter new name or leave blank for current to remain: ")
            salary = input("Enter new salary or leave blank for current to remain: ")
            role = input("Enter new role or leave blank for current to remain: ")

            updates = {}
            if name:
                updates["name"] = name
            if salary:
                updates["salary"] = float(salary)
            if role:
                updates["role"] = role
            if updates:
                ems.update_employee(employee_id, **updates)
            else:
                print("No updates provided")
        elif choice == "6":
            employee_id = int(input("Enter Employee ID to delete: "))
            ems.delete_employee(employee_id)
        elif choice == "7":
            print("Logging out")
            break
        else:
            print("Invalid option. Please try again.")

def employee_interface(ems):
    employee_id = int(input("Enter your ID to log in: "))
    employee = ems.search_employee(employee_id)
    if employee:
        while True:
            print("\n***Employee Menu***")
            print("1. Clock In")
            print("2. Clock Out")
            print("3. View Details")
            print("4. Log out")

            choice = input("Choose an option: ")

            if choice == "1":
                employee.clock_in()
            elif choice == "2":
                employee.clock_out()
            elif choice == "3":
                ems.view_employee_details(employee_id)
            elif choice == "4":
                print("Logging out")
                break
            else:
                print("Invalid option. Please try again.")
    else:
        print("Employee not found")

def main():
    ems = EmployeeManagementSystem()

    while True:
        print("\n***MAIN MENU***")
        print("1. Admin Login")
        print("2. Employee Login")
        print("3. Quit")

        choice = input("Choose an option: ")

        if choice == "1":
            admin_interface(ems)
        elif choice == "2":
            employee_interface(ems)
        elif choice == "3":
            print("Exiting EMS")
            break
        else:
            print("Invalid option. Please try again.")

    
if __name__ == "__main__":
    main()
            
