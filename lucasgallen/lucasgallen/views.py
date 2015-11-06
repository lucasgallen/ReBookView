from django.shortcuts import render, render_to_response, get_object_or_404

from lucasgallen.models import Book

def home(request):
    return render(request, 'home.html')

def library(request):
    books = []

    for book in Book.objects.all():
        books.append({
                'cover': book.cover,
                'caption': book.caption,
                'title_slug': book.title_slug,
            })

    return render(request, 'library.html', { 'books': books, })

def gameoflife(request):
    return render(request, 'gameoflife.html')

def contact(request):
    return render(request, 'contact.html')
