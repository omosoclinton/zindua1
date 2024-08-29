from django.shortcuts import render

employees = [
    {
        "name":"Kunta Kinte",
        "employee_id":1,
        "salary":10000,
        "role":"CEO"
    },
    {
        "name":"Rosa Parks",
        "employee_id":2,
        "salary":8000,
        "role":"CFO"
    },
    {
        "name":"Martin Lunder",
        "employee_id":3,
        "salary":8500,
        "role":"CTO"
    },
    {
        "name":"Booker T. Dryington",
        "employee_id":4,
        "salary":8000,
        "role":"General Manager"
    }
]

# Create your views here.
def home(requests):
    context = {
        "employees":employees,
        "title":"Employee List"
    }
    return render(requests, "ems_app/home.html", context)

def contacts(requests):
    return render(requests, "ems_app/contacts.html")