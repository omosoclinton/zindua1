from rest_framework import serializers
from .models import Student, Course


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['name']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['firstName', 'lastName','course', 'age']



class StudentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['firstName', 'lastName','course', 'age']