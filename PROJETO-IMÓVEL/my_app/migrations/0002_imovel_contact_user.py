# Generated by Django 5.0.3 on 2024-08-22 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='imovel',
            name='contact_user',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
