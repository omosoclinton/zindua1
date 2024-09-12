from django.forms import BaseModelForm
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import ListView, UpdateView, DeleteView, CreateView, DetailView
from .models import Employee, Department, Role
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.urls import reverse_lazy
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .forms import DepartmentCreateForm, RoleCreateForm, UserCreateForm, EmployeeCreateForm


# Employee Classed Base Functions
class EmployeeListView(LoginRequiredMixin, ListView):
    model = Employee
    template_name = 'ems_app/employee.html'
    context_object_name = 'employees'

class EmployeeUpdateView(LoginRequiredMixin, UpdateView):
    model = Employee
    fields = ['salary', 'role', 'department']
    template_name = 'ems_app/form.html'
    success_url = "/employees"

class EmployeeDeleteView(LoginRequiredMixin, DeleteView):
    model = Employee
    success_url = "/employees"

class EmployeeCreateView(LoginRequiredMixin, CreateView):
    model = Employee
    fields = ['salary', 'role', 'department']


class EmployeeCreateView(LoginRequiredMixin, CreateView):
    model = Employee
    form_class = EmployeeCreateForm
    template_name = "ems_app/form.html"
    success_url = "/employees"

    def form_valid(self, form):
        return super().form_valid(form)


# Department class-based functions
class DepartmentListView(LoginRequiredMixin, ListView):
    model = Department
    template_name = 'ems_app/department.html'
    context_object_name = 'departments'

class DepartmentUpdateView(LoginRequiredMixin, UpdateView):
    model = Department
    fields = ['department_name',]
    template_name = 'ems_app/form.html'
    success_url = "/departments"

class DepartmentDeleteView(LoginRequiredMixin, DeleteView):
    model = Department
    success_url = "/departments"

class DepartmentCreateView(LoginRequiredMixin, CreateView):
    model = Department
    form_class = DepartmentCreateForm
    template_name = "ems_app/form.html"
    success_url = "/departments"

    def form_valid(self, form):
        return super().form_valid(form)

# Role class-based functions
class RoleListView(LoginRequiredMixin, ListView):
    model = Role
    template_name = 'ems_app/roles.html'
    context_object_name = 'roles'

class RoleUpdateView(LoginRequiredMixin, UpdateView):
    model = Role
    fields = ['department','role']
    template_name = 'ems_app/form.html'
    success_url = "/roles"

class RoleDeleteView(LoginRequiredMixin, DeleteView):
    model = Role
    success_url = "/roles"

class RoleCreateView(LoginRequiredMixin, CreateView):
    model = Role
    form_class = RoleCreateForm
    template_name = "ems_app/form.html"
    success_url = "/roles"

    def form_valid(self, form):
        return super().form_valid(form)
    

class UserCreateView(LoginRequiredMixin, CreateView):
    model = User
    form_class = UserCreateForm
    template_name = "ems_app/form.html"
    success_url = "/manage"

    def form_valid(self, form):
        return super().form_valid(form)
    

# Mixed Models
class EmployeeByDepartmentView(DetailView):
    model = Department
    template_name = "ems_app/employees_by_department.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['employees'] = self.object.employee_set.all()
        return context

#@login_required
def home(requests):
    context = {
        "employees":'',
        "title":"Employee List"
    }
    return render(requests, "ems_app/home.html", context)

def contacts(requests):
    return render(requests, "ems_app/contacts.html")


def manage(requests):
    return render(requests, "ems_app/manage.html")

def form(requests):
    return render(requests, "ems_app/form.html")

def department(requests):
    return render(requests, "ems_app/department.html")

def roles(requests):
    return render(requests, "ems_app/roles.html")

def employee_view(requests):
    return render(requests, "ems_app/employee.html")