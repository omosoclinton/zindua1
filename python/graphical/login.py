from tkinter import *
from users_db import register_db
# Settup 
root = Tk()

root.title("User Management")
root.geometry("640x480")

welcome_label = Label(root, text="Welcome", fg="black", font=("Helvetica", 30, "bold"))
welcome_label.grid(row=0, column=4, padx=40,pady=20)

# welcome_label2 = Label(root, text="Welcome Again", fg="black", font=("Helvetica", 20))
# welcome_label2.grid(row=3, column=0, pady=50,padx=50)
def login():
    login_window = Tk()
    login_window.title("Login")
    login_window.geometry("640x480")
    
    # labels
    login_label = Label(login_window, text="Login", font=("Helvetica", 30, "bold"))
    login_label.grid(row=0, column=0, pady=20, padx=20)

    # username labels
    username_label = Label(login_window, text="Username", font=("Helvetica", 15))
    username_label.grid(row=1, column=0, padx=20, pady=20)
    # username entry
    username_entry = Entry(login_window, width=30, font=("Helvetica", 20))
    username_entry.grid(row=1, column=1)

    # password labels
    password_label = Label(login_window, text="Password", font=("Helvetica", 15))
    password_label.grid(row=2, column=0, padx=20, pady=20)
    # username entry
    password_entry = Entry(login_window, width=30, font=("Helvetica", 20))
    password_entry.grid(row=2, column=1)


    login_button = Button(login_window, text="Login")
    login_button.grid(row=3, column=1)

    root.destroy()
    
    login_window.mainloop()

def register():
    register_window = Tk()
    register_window.title("Register")
    register_window.geometry("640x480")
    
    # labels
    register_label = Label(register_window, text="Register", font=("Helvetica", 30, "bold"))
    register_label.grid(row=0, column=0, pady=20, padx=20)

    # username labels
    username_label = Label(register_window, text="Username", font=("Helvetica", 15))
    username_label.grid(row=1, column=0, padx=20, pady=20)
    # username entry
    username_entry = Entry(register_window, width=30, font=("Helvetica", 20))
    username_entry.grid(row=1, column=1)

    # password labels
    password_label = Label(register_window, text="Password", font=("Helvetica", 15))
    password_label.grid(row=2, column=0, padx=20, pady=20)
    # username entry
    password_entry = Entry(register_window, width=30, font=("Helvetica", 20))
    password_entry.grid(row=2, column=1)

     
    # confirm password labels
    confirm_password_label = Label(register_window, text="Confirm Password", font=("Helvetica", 15))
    confirm_password_label.grid(row=3, column=0, padx=20, pady=20)
    # username entry
    confirm_password_entry = Entry(register_window, width=30, font=("Helvetica", 20))
    confirm_password_entry.grid(row=3, column=1)

    submit_button = Button(register_window, text="Submit", command=lambda:register_db(username_entry.get(), password_entry.get(), register_window, login))
    submit_button.grid(row=4, column=1)

    root.destroy()
    
    register_window.mainloop()


login_button = Button(root, text="Login", command=login)
login_button.grid(row=1, column=4)

register_button = Button(root, text="Register", command=register)
register_button.grid(row=1, column=5)



root.mainloop()