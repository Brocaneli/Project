# Generated by Django 2.1.7 on 2019-05-07 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0008_auto_20190429_2240'),
    ]

    operations = [
        migrations.RenameField(
            model_name='aluno',
            old_name='turma_id',
            new_name='turma',
        ),
        migrations.RenameField(
            model_name='aluno',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='colaborador',
            old_name='turma_id',
            new_name='turma',
        ),
        migrations.RenameField(
            model_name='colaborador',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='matricula',
            old_name='turma_id',
            new_name='turma',
        ),
        migrations.RenameField(
            model_name='matricula',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='turma',
            old_name='ciclo_id',
            new_name='ciclo',
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=100),
        ),
    ]
