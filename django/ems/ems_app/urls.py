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
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='ems-home'),
    path('contacts/', views.contacts, name='ems-contacts'),
    #path('department/', views.department, name="department"),
    # Employee URLS
    path('employees/', views.EmployeeListView.as_view(), name='employees'),
    path('employees/<int:pk>/update/', views.EmployeeUpdateView.as_view(), name='employee-update'),
    path('employees/<int:pk>/delete/', views.EmployeeDeleteView.as_view(), name='employee-delete'),
    path('employees/create/', views.EmployeeCreateView.as_view(), name="employee-create"),
    # Department URLs
    path('departments/', views.DepartmentListView.as_view(), name='departments'),
    path('department/<int:pk>/update/', views.DepartmentUpdateView.as_view(), name='department-update'),
    path('department/<int:pk>/delete/', views.DepartmentDeleteView.as_view(), name='department-delete'),
    path('department/create/', views.DepartmentCreateView.as_view(), name="department-create"),
    # Roles URLS
    path('roles/', views.RoleListView.as_view(), name='roles'),
    path('roles/<int:pk>/update/', views.RoleUpdateView.as_view(), name='roles-update'),
    path('roles/<int:pk>/delete/', views.RoleDeleteView.as_view(), name='roles-delete'),
    path('roles/create/', views.RoleCreateView.as_view(), name="roles-create"),
    path('user/create/', views.UserCreateView.as_view(), name="user-create"),
    # Mixed Views
    path('department/<int:pk>/', views.EmployeeByDepartmentView.as_view(), name="department-employees")
]


