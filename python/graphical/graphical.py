''' Graphical UI'''
from tkinter import *
from datetime import datetime

root = Tk()
root.title("Digi Clock")
root.geometry('640x480')
root.config(bg="steelblue")
label =  Label(root, text="Welcome", bg='steelblue', font=("Arial Black", 78, "bold"))
label.pack(pady=10)

def clock ():
    time = datetime.now().strftime("%H:%M:%S")
    label.config(text=time)
    label.after(1000, clock)
clock()
root.mainloop()