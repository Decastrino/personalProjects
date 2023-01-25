from django.contrib import admin
from django.urls import path

from firstApp import views

urlpatterns = [
    path('', views.home, name='home'),
    path('index/', views.index, name='index'),
    path('static_page/', views.static_page, name='static_page'),
    path('search/', views.search, name="search"),
    path('about/', views.about,name="about"),
    path('forms/',views.forms,name="form"),
    #path("<str:name>/", views.show_name, name='show_name'),
]