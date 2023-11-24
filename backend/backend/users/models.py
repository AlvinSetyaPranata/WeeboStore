from django.db import models

MEMBER_TYPE = [
    ('0', 'NEWBIE'),
    ('1', 'ANIME LOVER'),
    ('2', 'WEEBO'),
    ('3', 'UNDEFEATED WEEBO'),
]

class User(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    member_type = models.CharField(max_length=30, choices=MEMBER_TYPE, default=MEMBER_TYPE[0])
    date_registered = models.DateTimeField(editable=False, auto_now_add=True)

    def __str__(self):
        return self.name
