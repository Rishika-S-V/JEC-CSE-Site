from django.db import models

from . import Student


class AlumniWork(models.Model):
    company = models.CharField(max_length=512)
    position = models.CharField(max_length=512)
    duration = models.CharField(max_length=128)
    is_current = models.BooleanField(default=False)
    alumni = models.ForeignKey(
        "Alumni", on_delete=models.CASCADE, related_name="works", blank=True
    )


class Alumni(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE)
