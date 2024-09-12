from django.db import models

# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=250, unique=True)

    def __str__(self):
        return f"{self.name}"

class Student(models.Model):
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    age = models.IntegerField()

    def __str__(self):
        return f"{self.firstName} {self.lastName}"

