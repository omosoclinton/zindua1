from django.forms import BaseModelForm
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Post
from django.views.generic import ListView, DetailView, CreateView, UpdateView
from django.contrib.auth.decorators import login_required
from .forms import PostCreateForm
from django.urls import reverse
# Create your views here.

def home(requests):
    context ={
        "posts":Post.objects.all(),
        "title":"Blog Posts"
    }
    return render(requests, "newblog/home.html", context)



class PostListView(ListView):
    model = Post
    template_name = 'newblog/home.html'
    context_object_name = "posts"
    ordering = ['-date_posted']

class PostDetailView(DetailView):
    model = Post

class PostCreateView(CreateView):
    model = Post
    fields = ['title', 'content']
    template_name = "newblog/create_post.html"


    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

class PostUpdateView(UpdateView):
    model = Post
    fields = ['title', 'content']
    template_name = "newblog/create_post.html"


@login_required
def createPost(request):
    if request.method == 'POST':
        form = PostCreateForm(request.POST)
        if form.is_valid():
            saved_form = form.save(user=request.user)
            return redirect('post-detail',pk=saved_form.pk)
    else:
        form = PostCreateForm()
    return render(request, "newblog/create_post.html", {'form':form})



# def postDetail(request, pk):
#     post = Post.objects.filter(pk=pk).first()
#     return render(request, "newblog/post_detail.html", {'post':post})

def about(requests):
    return render(requests, "newblog/about.html")


def contactUs(requests):
    return render(requests, "newblog/contacts.html")