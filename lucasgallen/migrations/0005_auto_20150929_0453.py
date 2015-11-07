# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lucasgallen', '0004_book_series'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='series',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
    ]
