import os
from django.db import models
from django.utils import text


def book_storage(instance, filename):
    author_slug_name = text.slugify(instance.author)
    return os.path.join(
            'books/{}/{}'.format(author_slug_name, filename)
        )

class Book(models.Model):
    title = models.CharField(max_length=140)
    title_slug = models.SlugField(max_length=140,unique=True,null=True)
    author = models.CharField(max_length=70)
    cover = models.ImageField(max_length=100, upload_to=book_storage)
    caption = models.CharField(max_length=140)

    def __str__(self):
        return self.title

