# Generated by Django 2.1.7 on 2019-05-29 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0020_merge_20190527_2247'),
    ]

    operations = [
        migrations.AddField(
            model_name='matricula',
            name='graduated',
            field=models.CharField(default='aguardando', max_length=50),
        ),
    ]
