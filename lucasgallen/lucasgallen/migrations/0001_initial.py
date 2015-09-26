# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import lucasgallen.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=140)),
                ('author', models.CharField(max_length=70)),
                ('cover', models.ImageField(upload_to=lucasgallen.models.book_storage)),
                ('caption', models.CharField(max_length=140)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
