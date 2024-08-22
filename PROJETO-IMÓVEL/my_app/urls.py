from django.urls import path 
from . import views


urlpatterns = [
    path('cadastro/', views.cad, name='cad'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout')
]

