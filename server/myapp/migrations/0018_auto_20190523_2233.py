# Generated by Django 2.1.7 on 2019-05-23 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0017_auto_20190516_2313'),
    ]

    operations = [
        migrations.AlterField(
            model_name='matricula',
            name='approved',
            field=models.CharField(default='pending', max_length=50),
        ),
    ]
