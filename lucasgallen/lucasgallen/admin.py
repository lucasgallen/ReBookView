from django.contrib import admin
from django.forms import Textarea
from django.db import models
from lucasgallen.models import Book, BookArticle

class BookAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 100, 'cols': 70})},
    }
    prepopulated_fields = { 'title_slug': ('title',) }

class BookArticleAdmin(admin.ModelAdmin):
    pass

admin.site.register(Book, BookAdmin)
admin.site.register(BookArticle, BookArticleAdmin)
