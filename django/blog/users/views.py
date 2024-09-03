from django.shortcuts import render, redirect
#from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from .forms import UserRegistration
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserUpdateForm, ProfileUpdateForm

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
    if request.method == 'POST':
        p_form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
        u_form = UserUpdateForm(request.POST, instance=request.user)
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, f"Updated succesfully")
            return redirect("users-profile")
    else:
        p_form = ProfileUpdateForm(instance=request.user.profile)
        u_form = UserUpdateForm(instance=request.user)
        context = {
            "p_form":p_form,
            "u_form":u_form,
        }
    return render(request, "users/profile.html", context)