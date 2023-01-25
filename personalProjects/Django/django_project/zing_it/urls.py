from django.urls import path
from zing_it import views

urlpatterns = [
    path('', views.home,name="home"),
    path('signup/',views.signUp,name="signup"),
    path('login/',views.login,name="login"),
    path('about/',views.about,name="about"),
    path('playlist/<int:id>',views.playlist,name="playlist"),
    path('edit/<int:id>',views.edit,name="edit"),
]
