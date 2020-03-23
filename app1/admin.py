from django.contrib import admin

# Register your models here.
from .models import Books

@admin.register(Books)
class Books(admin.ModelAdmin):
    pass