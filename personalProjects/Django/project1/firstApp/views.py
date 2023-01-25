from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.models import User
from django.db import IntegrityError

from .forms import TestForm, PostModelForm

# forms
"""
def forms(request):
    form = SearchForm()
    return render(request,'firstApp/forms.html', {'form': form})
"""
def forms1(request):
    """
    initial_dict = {
        'text' : 'some initial text value',
        'integer': 123 
    }
    form = TestForm(request.POST or None, initial=initial_dict)
    """
    form = TestForm(request.POST or None)
    data = "None"
    text = "None"
    if form.is_valid():
        data = form.cleaned_data
        text = form.cleaned_data.get("text")
    return render(request,'firstApp/forms.html', {'form': form, 'data': data, 'text': text})

# Model form. Used to create instances for the specific Model(insert into table)
def forms(request):
    form = PostModelForm( request.POST or None)
    data = "None"
    text= "None"
    if form.is_valid():
        data = form.cleaned_data
        text= form.cleaned_data.get("text")
    return render(request,'firstApp/forms.html', {'form': form,'data': data, 'text': text})

# Endpoints
def show_name(request, name):
    return HttpResponse(f"Welcome {name}")

def index(request):
    tv_shows_list={"tv_shows":{'Game of Thrones':'9.3','Blacklist': '8','Suits': '8.5','The Witcher': '8.5'}}
    return render(request,'firstApp/index.html',context=tv_shows_list)

def static_page(request):
    return render(request,'firstApp/Reinhardt.html')

def home(request):
    try:
        user = User.objects.create_user(username="Ulrich",email="ulrich@gmail.com",password="mac12")
        user.save()
    except IntegrityError as e:
        print(e)
    return HttpResponse("Welcome to Home page!")

def search(request):
    return render(request,'firstApp/search.html')

def about(request):
    user = User.objects.get(username='Ulrich')
    user.email = "helsinki@gmail.com"
    user.save()
    return HttpResponse("Welcome to the About page")