from django.shortcuts import render, render_to_response, get_object_or_404

from lucasgallen.models import Book, BookArticle

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

def book_article(request, name):
    book = Book.objects.get(title_slug=name)
    book_articles = []

    for article in BookArticle.objects.all().filter(book=book.pk):
        book_articles.append({
                'body': article.body,
                'headline': article.headline,
                'pub_date': article.pub_date,
            })

    return render(request, 'book_article.html', { 'book': book, 'book_articles': book_articles, })

def contact(request):
    return render(request, 'contact.html')
