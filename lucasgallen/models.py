import os
from django.db import models
from django.utils import text
from ckeditor.fields import RichTextField


def book_storage(instance, filename):
    author_slug_name = text.slugify(instance.author)
    return os.path.join(
            'books/{}/{}'.format(author_slug_name, filename)
        )

class Book(models.Model):
    author = models.CharField(max_length=70)
    caption = models.CharField(max_length=140)
    cover = models.ImageField(max_length=100, upload_to=book_storage)
    series = models.CharField(max_length=100, null=True, blank=True)
    title = models.CharField(max_length=140)
    title_slug = models.SlugField(max_length=140,unique=True, null=True)

    def __str__(self):
        return self.title


class BookArticle(models.Model):
    body = RichTextField()
    headline = models.CharField(max_length=120)
    pub_date = models.DateField(auto_now_add=True)
    book = models.ForeignKey(Book, related_name="Articles")

    def __str__(self):
        return self.headline
