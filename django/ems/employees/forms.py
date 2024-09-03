from django import forms
from django.contrib.auth.forms import UserCreationForm
from ems_app.models import Employee

class EmployeeRegistration(forms.ModelForm):
    class Meta:
        model = Employee
        fields = ['full_name', 'hire_date', 'salary', 'department', 'role', 'user']