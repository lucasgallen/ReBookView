# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lucasgallen', '0003_bookarticle'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='series',
            field=models.CharField(max_length=100, null=True),
            preserve_default=True,
        ),
    ]
