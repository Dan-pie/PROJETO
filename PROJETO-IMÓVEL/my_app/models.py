from django.db import models

# Create your models here.
class imovel(models.Model):
    contact_user = models.CharField(max_length=255, null=True)
    action = models.CharField(max_length=7)
    type = models.CharField(max_length=40)
    estate = models.CharField(max_length=7)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    number = models.IntegerField()
    complement = models.CharField(max_length=255)
    rooms = models.IntegerField()
    bath = models.IntegerField()
    price = models.DecimalField(decimal_places=2, max_digits= 10)
    area = models.IntegerField()
    image = models.ImageField(upload_to='')