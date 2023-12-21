from rest_framework.serializers import ModelSerializer
from .models import Product, Catagory


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CatagorySerializer(ModelSerializer):

    class Meta:
        model = Catagory
        fields = '__all__'
