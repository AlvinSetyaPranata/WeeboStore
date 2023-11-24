from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    price = models.IntegerField()
    discount_price = models.IntegerField(blank=True, null=True, default=0)
    product_image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.title