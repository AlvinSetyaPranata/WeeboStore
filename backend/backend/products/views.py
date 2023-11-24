from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class Prodcuts(APIView):
    def get(self, req):


        return Response({})