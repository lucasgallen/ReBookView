# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lucasgallen', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='title_slug',
            field=models.SlugField(max_length=140, unique=True, null=True),
            preserve_default=True,
        ),
    ]
