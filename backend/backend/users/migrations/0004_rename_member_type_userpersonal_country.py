# Generated by Django 4.2.7 on 2023-11-24 23:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_remove_user_description_user_photo_profile_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userpersonal',
            old_name='member_type',
            new_name='country',
        ),
    ]
