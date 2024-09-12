from django.db import models
from django.contrib.auth.models import User
from PIL import Image

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
    hire_date = models.DateField()
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department,null=True, on_delete=models.SET_NULL)
    role = models.ForeignKey(Role,null=True, on_delete=models.SET_NULL)
    profileImage = models.ImageField(default="profile_pics/default.jpg", upload_to="profile_pics")

    def __str__(self):
        return self.user.username
    
    def save(self, *args, **kwargs):
        super(Employee, self).save(*args, **kwargs)

        img = Image.open(self.profileImage.path)

        if img.height > 300 and img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
    

    

