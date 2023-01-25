from django import forms
from .models import *

class Signup(forms.Form):
    full_name = forms.CharField(required=True, max_length=50,widget=forms.TextInput)
    email = forms.EmailField(required=True, max_length=50, widget=forms.EmailInput)
    password = forms.CharField(required=True, max_length=50,widget=forms.PasswordInput)
    confirm_pasword = forms.CharField(required=True, max_length=50,widget=forms.PasswordInput)
    """
    def clean_confirm_pasword(self):
        password = self.cleaned_data.get('password')
        confirm_pasword= self.cleaned_data.get("confirm_pasword")
        if confirm_pasword != password:
            raise forms.ValidationError("Passwords do not match")
        return confirm_pasword
    """


class Login(forms.Form):
    username = forms.CharField(required=True, max_length=50,widget=forms.TextInput)
    #email = forms.EmailField(required=True, max_length=50, widget=forms.EmailInput)
    password = forms.CharField(required=True, max_length=50,widget=forms.TextInput)



# User model. We can use Django's inbuilt user model provided in django.contrib.auth.models
# Model forms ( to enter values into specified DB)

class Edit(forms.ModelForm):
    
    class Meta:
        model = Song
        fields= ["track","artist","album","length","playlist_id"]
        exclude= []
"""
class PostPlaylistModelForm(forms.ModelForm):
    
    class Meta:
        model = Playlist
        fields= ["playlist_name","track","num_songs"]
        exclude= []
"""