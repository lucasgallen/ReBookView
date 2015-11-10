# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import ckeditor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('lucasgallen', '0005_auto_20150929_0453'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookarticle',
            name='body',
            field=ckeditor.fields.RichTextField(),
            preserve_default=True,
        ),
    ]
