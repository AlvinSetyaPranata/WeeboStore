# Generated by Django 4.2.7 on 2023-11-24 23:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_rename_users_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='description',
        ),
        migrations.AddField(
            model_name='user',
            name='photo_profile',
            field=models.ImageField(blank=True, null=True, upload_to='users/images/'),
        ),
        migrations.AlterField(
            model_name='user',
            name='member_type',
            field=models.CharField(choices=[('NEWBIE', 'Newbie'), ('ANIME LOVER', 'Anime Lover'), ('WEEBO', 'Weebo'), ('UNDEFEATED WEEBO', 'Undefeated Weebo')], default=('NEWBIE', 'Newbie'), max_length=30),
        ),
        migrations.CreateModel(
            name='UserPersonal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about', models.TextField()),
                ('firstname', models.CharField(max_length=255)),
                ('lastname', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('address', models.TextField()),
                ('city', models.CharField(max_length=255)),
                ('province', models.CharField(max_length=255)),
                ('postal_code', models.CharField(max_length=255)),
                ('member_type', models.CharField(choices=[('ID', 'Indonesia'), ('JP', 'Japan'), ('USA', 'United States of America'), ('UK', 'United Kingdoms')], default=('ID', 'Indonesia'), max_length=30)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
        ),
    ]
