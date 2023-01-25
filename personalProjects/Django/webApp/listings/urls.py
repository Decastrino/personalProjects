
from django.urls import path
from .import views


app_name = 'listings'

urlpatterns = [
    # Homepage
    path('', views.index, name='index'),
    # Listings Page
    path('all_listings/', views.all_listings, name='all_listings'),
    # New Listing
    path('new_listing/', views.new_listing, name='new_listing'),
    # Detail Listing
    path('all_listings/<detail_id>/', views.detail, name='detail'),
    #path('detail/<detail_id>',views.detail,name="detail"),
    # Login
    path('login/',views.login,name="login"),
     # My Listings
    path('my_listings/', views.my_listings, name='my_listings'),
    # Edit listings
    path('edit_listing/<edit_id>/', views.edit_listing, name='edit_listing'),
    
]