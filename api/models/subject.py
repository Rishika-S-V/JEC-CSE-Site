from django.db import models


class Subject(models.Model):
    short_name = models.CharField(max_length=128)
    long_name = models.TextField()
    code = models.CharField(max_length=64)

    def __str__(self) -> str:
        return f"{self.short_name} ({self.code})"
