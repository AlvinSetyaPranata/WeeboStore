from django.shortcuts import render
from django.core import serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ProductSerializer
from .models import Product

class ProductsView(APIView):
    def get(self, req):
        data = Product.objects.all()

        serialized_data = ProductSerializer(data, many=True).data


        return Response(serialized_data, status=status.HTTP_200_OK)