# Generated by Django 4.2.7 on 2023-11-24 23:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_rename_member_type_userpersonal_country'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userpersonal',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user', unique=True),
        ),
    ]
