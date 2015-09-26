from django.contrib import admin
from lucasgallen.models import Book

class BookAdmin(admin.ModelAdmin):
    prepopulated_fields = { 'title_slug': ('title',) }

admin.site.register(Book, BookAdmin)
