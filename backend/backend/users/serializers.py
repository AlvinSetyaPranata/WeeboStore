from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class UserPersonalSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    
    class Meta:
        model = UserPersonal
        fields = "__all__"