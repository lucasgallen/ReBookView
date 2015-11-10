from django.contrib import admin
from django.forms import Textarea, CharField, ModelForm
from django.db import models
from lucasgallen.models import Book, BookArticle
from ckeditor.widgets import CKEditorWidget

class BookAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 100, 'cols': 70})},
    }
    prepopulated_fields = { 'title_slug': ('title',) }

class BookArticleAdminForm(ModelForm):
    body = CharField(widget=CKEditorWidget())

    class Meta:
        model = BookArticle
        fields = '__all__'

class BookArticleAdmin(admin.ModelAdmin):
    form = BookArticleAdminForm

admin.site.register(Book, BookAdmin)
admin.site.register(BookArticle, BookArticleAdmin)
