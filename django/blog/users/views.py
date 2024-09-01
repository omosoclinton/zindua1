from django.shortcuts import render, redirect
#from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from .forms import UserRegistration
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.
def register(requests):
    if requests.method == "POST":
        form = UserRegistration(requests.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            form.save()
            messages.success(requests, f"User account for {username} has been created")
            return redirect('blog-home')
    else:
        form = UserRegistration()
    return render(requests, "users/register.html", {"form": form})

def login(requests):
    return render(requests, "users/login.html")

@login_required
def userProfile(request):
    return render(request, "users/profile.html")