"""
URL configuration for ems project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from employees import views as employee_views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('ems/', include('ems_app.urls')),  
    path("login/", auth_views.LoginView.as_view(template_name='employees/login.html'), name='employee-login'),
    path("logout/", auth_views.LogoutView.as_view(template_name='employees/logout.html'), name='employee-logout'),
    #path('profile/', employee_views.employeeProfile, name="employee-profile"),
    path('profile/', employee_views.userProfile, name="employee-profile"),
    path('register/', employee_views.employeeRegistration, name="register-employee"),
    path('employees', include('employees.urls'))

]
