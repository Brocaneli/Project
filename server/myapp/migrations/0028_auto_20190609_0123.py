# Generated by Django 2.1.7 on 2019-06-09 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0027_auto_20190605_2151'),
    ]

    operations = [
        migrations.AlterField(
            model_name='matricula',
            name='nota',
            field=models.FloatField(),
        ),
    ]
