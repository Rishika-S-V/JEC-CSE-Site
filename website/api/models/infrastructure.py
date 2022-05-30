from django.db import models


class Infrastructure(models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()


class InfrastructureImage(models.Model):
    path = models.FileField(upload_to="infrastructure_images")
    infrastructure = models.ForeignKey(
        Infrastructure, on_delete=models.CASCADE, related_name="images"
    )
