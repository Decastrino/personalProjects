from django.shortcuts import render, redirect

from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib import auth

from .models import Listings
from .forms import ListingForm, Login

# Create your views here.

def index(request):
    return render(request, 'listings/index.html')

def all_listings(request):
    print(request)
    all_listings = Listings.objects.order_by('-list_date')
    context = {"all_listings": all_listings}
    return render(request, 'listings/listings.html', context)

def my_listings(request):
    print(request)
    my_listings = Listings.objects.order_by('-list_date')
    context = {'my_listings': my_listings}
    return render(request, 'listings/my_listings.html', context)

def detail(request, detail_id):
    detail = Listings.objects.get(id=detail_id)
    context = {'detail': detail}
    return render(request, 'listings/detail.html', context)

def edit_listing(request, edit_id):
    listing = Listings.objects.get(id=edit_id)
    print(listing)
    if request.method != 'POST':
        form = ListingForm(instance=listing)
    else:
        form = ListingForm(request.POST, request.FILES, instance=listing)
        if form.is_valid():
            form.save()
            return redirect('listings:all_listings')

    context = {'listing': listing, 'form': form}
    return render(request, 'listings/edit_listing.html', context)

def new_listing(request):
    if request.method != 'POST':
        form = ListingForm()
    else:
        form = ListingForm(request.POST, request.FILES) # request.FILES needed to submit image files
        if form.is_valid():
            form.save()
            return redirect('listings:all_listings')
      
    context = {'form': form}
    return render(request, 'listings/new_listing.html', context)


@csrf_exempt
def login(request):
    login = Login(request.POST or None)
    status = ' '
    name = 'Login'

    if login.is_valid():
        username = login.cleaned_data.get('username')
        password = login.cleaned_data.get('password')
        user = auth.authenticate(username=username, password=password)
        
        if user:
            auth.login(request, user)
            status="You have successfully logged in!"
        else:
            status="You credentials are not valid. Try again!"
        
        return render(request, 'listings/login.html', {'login':login, 'name':name, 'status':status})
    return render(request, 'listings/login.html', {'login':login, 'name':name})