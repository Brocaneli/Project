# Generated by Django 2.1.7 on 2019-05-13 23:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0012_auto_20190512_1601'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='aula',
            name='turma_id',
        ),
        migrations.AddField(
            model_name='aula',
            name='ciclo',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='myapp.Ciclo'),
            preserve_default=False,
        ),
    ]