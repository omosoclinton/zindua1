from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
# Create your views here.

def home(requests):
    print()
    context ={
        "posts":Post.objects.all(),
        "title":"Blog Posts"
    }
    return render(requests, "newblog/home.html", context)

def about(requests):
    return render(requests, "newblog/about.html")


def contactUs(requests):
    return render(requests, "newblog/contacts.html")