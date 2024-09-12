from django.db import models
from student.models import Course
# Create your models here.

class Teacher(models.Model):
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    tscNumber = models.CharField(max_length=200, unique=True, null=True)
    course = models.ManyToManyField(Course)

    def __str__(self):
        return f"{self.firstName} {self.lastName}"

