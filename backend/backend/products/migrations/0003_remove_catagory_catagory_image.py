# Generated by Django 5.0 on 2023-12-27 12:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_rename_title_product_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='catagory',
            name='catagory_image',
        ),
    ]
