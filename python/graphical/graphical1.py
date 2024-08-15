from tkinter import *

root =Tk()

root.title("Buttons")
root.geometry("640x480")
root.config(bg='skyblue')
welcome_label = Label(root, text="Buttons", bg="skyblue", fg="white", font=("sanserif", 50, "bold"))
welcome_label.pack(pady=50)

def onClick(userText):
    welcome_label.config(text=f"Hello, {userText}", bg="teal", font=("sanserif", 20))
my_entry = Entry(root, width=40, font=('Helvetica', 15))
my_entry.pack()
# def onClick2():
#     root.config(bg="teal")


my_button = Button(text="Click Me", command=lambda:onClick(my_entry.get()))
my_button.pack()
#my_button1 = Button(text="Back", command=onClick2)
#my_button1.pack()
root.mainloop()