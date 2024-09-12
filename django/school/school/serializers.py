from rest_framework import serializers
from django.contrib.auth.models import User
#from .models import Teacher

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email','password']