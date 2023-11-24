from django.db import models

# Create your models here.


class Catagory(models.Model):
    catagory_name = models.CharField(max_length=255, unique=True)

    @classmethod
    def get_default_pk(cls):
        catagory, _ = cls.objects.get_or_create(
            catagory_name='Unnamed catagory', 
        )
        return catagory.pk


    def __str__(self):
        return self.catagory_name


class Product(models.Model):
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    price = models.IntegerField()
    discount_price = models.IntegerField(blank=True, null=True, default=0)
    product_image = models.ImageField(upload_to='products/images/', blank=True, null=True)
    product_catagory = models.ForeignKey(Catagory, on_delete=models.CASCADE, default=Catagory.get_default_pk)

    def __str__(self):
        return self.title
    

