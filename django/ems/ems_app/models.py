from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# Department will have department name
class Department(models.Model):
    department_name = models.CharField(max_length=200)

    def __str__(self):
        return self.department_name

# nurse - 
# oncologist -Oncology
# Role will have name 
class Role(models.Model):
    role = models.CharField(max_length=200)
    department = models.ForeignKey(Department, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.role

class Employee(models.Model):
    full_name = models.CharField(max_length=250)
    hire_date = models.DateField()
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.ForeignKey(Role,null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.full_name
    

