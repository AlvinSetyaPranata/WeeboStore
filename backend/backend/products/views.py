from django.shortcuts import render
from django.core import serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ProductSerializer, CatagorySerializer
from .models import Product, Catagory

class ProductsView(APIView):
    def get(self, req):
        data = Product.objects.all()

        serialized_data = ProductSerializer(data, many=True).data


        return Response(serialized_data, status=status.HTTP_200_OK)


class CatagoryView(APIView):
    def get(self, req, **kwargs):
        data = Catagory.objects.all()

        # Get specific catagory id
        if "id" in kwargs:
            field = data.filter(id=kwargs["id"])

            if not field or str(field[0]) == "Unnamed catagory":
                return Response({}, status=status.HTTP_404_NOT_FOUND)

            return Response(CatagorySerializer(field, many=True).data, status=status.HTTP_200_OK)



        serialized_data = CatagorySerializer(data, many=True).data
        return Response(serialized_data, status=status.HTTP_200_OK)