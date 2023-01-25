from django import forms
from .models import Listings


class Login(forms.Form):
    username = forms.CharField(required=True, max_length=50,widget=forms.TextInput)
    password = forms.CharField(required=True, max_length=50,widget=forms.TextInput)

class ListingForm(forms.ModelForm):
    class Meta:
        model = Listings
        fields = ['title', 'condition', 'product_type', 'sale_type', 'price', 'main_photo', 'photo_1',
                  'photo_2', 'city', 'state', 'zipcode', 'contact_email', 'list_date']
                  