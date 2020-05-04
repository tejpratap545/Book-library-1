from django.urls import path,include
from . import views

urlpatterns = [
     path('',views.index,name='index'),
     path('savebook/',views.savebooks ,name="savebook"),
     path('getAllBooks',views.Showbooks,name="showbooks"),
     path('deletebook',views.deletebook,name="deletebook")
]