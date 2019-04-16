# Generated by Django 2.1.7 on 2019-04-15 23:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Turma',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('start_date', models.TextField(blank=True)),
                ('end_date', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='card',
            name='list',
        ),
        migrations.RenameModel(
            old_name='List',
            new_name='Ciclo',
        ),
        migrations.DeleteModel(
            name='Card',
        ),
        migrations.AddField(
            model_name='turma',
            name='ciclo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.Ciclo'),
        ),
    ]
