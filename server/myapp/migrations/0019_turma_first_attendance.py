# Generated by Django 2.1.7 on 2019-05-21 00:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0018_auto_20190520_2027'),
    ]

    operations = [
        migrations.AddField(
            model_name='turma',
            name='first_attendance',
            field=models.BooleanField(default=False),
        ),
    ]
