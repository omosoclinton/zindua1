"""
URL configuration for blog project.

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
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('', views.PostListView.as_view(), name='blog-home'),
    path('about/', views.about, name='blog-about' ),
    path('my-posts/', views.myPosts, name='my-posts' ),
    path('user/<int:user_id>/posts/', views.userPosts, name='user-posts' ),
    path('contacts/', views.contactUs, name='blog-contacts' ),
    #path('post/<int:pk>/',views.postDetail, name='post-detail'),
    path('post/<int:pk>/',login_required(views.PostDetailView.as_view()), name='post-detail'),
    path('post/create/', views.createPost, name='post-create'),
    #path('post/create/', login_required(views.PostCreateView.as_view()), name='post-create'),
    path('post/update/<int:pk>/', login_required(views.PostUpdateView.as_view()), name='post-update'),
    path('post/delete/<int:pk>/', login_required(views.PostDeleteView.as_view()), name='post-delete'),
]
