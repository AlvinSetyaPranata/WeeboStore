from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer
from .models import User

# Create your views here.
class UserView(APIView):
    def get(self, req):

        serialzer = UserSerializer(User.objects.all(), many=True).data

        return Response(serialzer, status=status.HTTP_200_OK)