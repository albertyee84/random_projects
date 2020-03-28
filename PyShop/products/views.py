from django.http import HttpResponse
from django.shortcuts import render
from .models import Product

# Create your views here.

# /products -> index
# Uniform Rescource Locator

def index(request):
    products = Product.objects.all()
    # Product.objects.filter()
    # Product.objects.get()
    # Product.objects.save()
    return render(request, 
                    'index.html', 
                    {'products': products})

def new(request):
    return HttpResponse('New Products')