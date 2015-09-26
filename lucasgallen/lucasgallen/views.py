from django.shortcuts import render, render_to_response, get_object_or_404

from lucasgallen.models import Book

def home(request):
    return render(request, 'home.html')

def interest(request):
    books = list(Book.objects.all())
    return render(request, 'interests.html', { 'books': books, })

def gameoflife(request):
    return render(request, 'gameoflife.html')

def contact(request):
    return render(request, 'contact.html')
