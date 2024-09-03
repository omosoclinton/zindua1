from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from ems_app.models import Employee
from .forms import EmployeeRegistration
from django.contrib.auth.models import User

# Create your views here.


@login_required
def employeeProfile(request):
    return render(request, "employees/profile.html")


@login_required
def registrationForm(request):
    return render(request, "employees/register.html")

@login_required
def employeeRegistration(request):

    if request.method == 'POST':
        form = EmployeeRegistration(request.POST)
        form.save()

        return render(request, 'employees/register.html', {'form':form})
    else:
        form = EmployeeRegistration()
        return render(request, 'employees/register.html', {'form':form})
    

@login_required
def userProfile(request):
    context = {
        "employees":Employee.objects.all()
    }
    return render(request, "employees/profile.html", context)