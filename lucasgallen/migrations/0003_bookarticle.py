# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('lucasgallen', '0002_book_title_slug'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookArticle',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('body', tinymce.models.HTMLField()),
                ('headline', models.CharField(max_length=120)),
                ('pub_date', models.DateField(auto_now_add=True)),
                ('book', models.ForeignKey(related_name='Articles', to='lucasgallen.Book')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
