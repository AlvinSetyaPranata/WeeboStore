# Generated by Django 4.2.7 on 2023-11-24 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_catagory_product_product_catagory'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catagory',
            name='catagory_name',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
