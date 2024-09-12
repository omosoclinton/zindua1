from django.forms import BaseModelForm
from django.shortcuts import render, redirect
from .models import Post
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.decorators import login_required
from .forms import PostCreateForm
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.urls import reverse
from django.contrib.auth.models import User
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
    paginate_by = 3

class PostDetailView(DetailView):
    model = Post

class PostCreateView(UserPassesTestMixin, CreateView):
    model = Post
    fields = ['title','excerpt', 'content']
    template_name = "newblog/create_post.html"


    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)
    
    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

class PostUpdateView( UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title','excerpt', 'content']
    template_name = "newblog/create_post.html"

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False
    
class PostDeleteView(UserPassesTestMixin, DeleteView):
    model = Post
    success_url = "/"

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False

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

@login_required
def myPosts(request):
    my_posts = Post.objects.filter(author= request.user).all()
    context = {
        'posts':my_posts,
        "title":"My "
    }
    return render(request, "newblog/home.html",context)

def userPosts(request, user_id):
    user = User.objects.filter(pk = user_id).first()
    user_posts = Post.objects.filter(author = user).all()
    #user_posts = Post.objects.filter(author__id = user_id).all()
    context = {
        "posts": user_posts,
        "title":user_posts[0].author.username
    }
    return render(request, "newblog/home.html",context)

def about(requests):
    return render(requests, "newblog/about.html")


def contactUs(requests):
    return render(requests, "newblog/contacts.html")