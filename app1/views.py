from django.shortcuts import render
from django.http import HttpResponse
 
from app1.models import Books,BookSerializer
import json

# Create your views here.
def index(request):
    return render(request,'app1/index.html')
def savebooks(request):
    
    try:
        Bookname=request.GET['bookname']
        Bookpages=request.GET['bookpages']
        Bookprice=request.GET['bookprice']
        book=Books(Bookname=Bookname,Bookpages=Bookpages,Bookprice=Bookprice)
        book.save()
        return HttpResponse("yes")
    except  :
        return HttpResponse("false")
def Showbooks(request):
    try:
        books=Books.objects.all()
        l=[]
        for i in books:
            ser=BookSerializer(i)
            l.append(ser.data)
        
        return HttpResponse(json.dumps(l))
        
    except:
        print("fuck")

def deletebook(request):
    try:
        array_data=request.GET['deletebookArray']
        #print(array_data)
        data = list(map(int,json.loads(array_data)))
        for i in data:
           book=Books.objects.get(id=i)
           book.delete()
        return HttpResponse("yes")
        
    except :
       return  HttpResponse("fuck")
   


     


     
    
    