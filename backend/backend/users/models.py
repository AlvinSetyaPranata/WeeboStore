from django.db import models

MEMBER_TYPE = [
    ('NEWBIE', 'Newbie'),
    ('ANIME LOVER', 'Anime Lover'),
    ('WEEBO', 'Weebo'),
    ('UNDEFEATED WEEBO', 'Undefeated Weebo'),
]



COUNTRIES = [
    ('ID', 'Indonesia'),
    ('JP', 'Japan'),
    ('USA', 'United States of America'),
    ('UK', 'United Kingdoms')
]



class User(models.Model):
    name = models.CharField(max_length=255, unique=True)
    member_type = models.CharField(max_length=30, choices=MEMBER_TYPE, default=MEMBER_TYPE[0])
    photo_profile = models.ImageField(upload_to="users/images/", blank=True, null=True)
    date_registered = models.DateTimeField(editable=False, auto_now_add=True)

    def __str__(self):
        return self.name


class UserPersonal(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True)
    about = models.TextField()
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    address = models.TextField()
    city = models.CharField(max_length=255)
    province = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=255)
    country = models.CharField(max_length=30, choices=COUNTRIES, default=COUNTRIES[0])


