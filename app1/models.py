from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
from rest_framework import serializers

# Create your models here.
class Books(models.Model):
    
    Bookname=models.CharField(max_length=50) 
    Bookpages=models.IntegerField()
    Bookprice=models.IntegerField()
    
     
    def __str__(self):
        return self.Bookname


 

class BookSerializer(serializers.Serializer):
    id=serializers.IntegerField()
    Bookname=serializers.CharField(max_length=50)
    Bookpages=serializers.IntegerField()
    Bookprice=serializers.IntegerField()