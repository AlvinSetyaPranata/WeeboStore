from django.urls import path
from .views import *

urlpatterns = [
    path('', ProductsView.as_view()),
    path('catagories', CatagoryView.as_view()),
    path('catagories/<int:id>/', CatagoryView.as_view()),
]