from django import forms
from .models import Department, Role, Employee
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
class DepartmentCreateForm(forms.ModelForm):
    class Meta:
        model = Department
        fields = '__all__'

    def save(self, commit=True):
        department = super().save(commit=False)

        if commit:
            department.save()
        return department
    

class RoleCreateForm(forms.ModelForm):
    class Meta:
        model = Role
        fields = '__all__'

    def save(self, commit=True):
        role = super().save(commit=False)

        if commit:
            role.save()
        return role
    

class EmployeeCreateForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = '__all__'

    def save(self, commit=True):
        role = super().save(commit=False)

        if commit:
            role.save()
        return role
    

class UserCreateForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email','password1', 'password2']

    def save(self, commit=True):
        role = super().save(commit=False)

        if commit:
            role.save()
        return role
        