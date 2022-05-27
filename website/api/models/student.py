from django.db import models


from datetime import date


class Student(models.Model):
    name = models.CharField(max_length=128)
    dob: date = models.DateField()
    batch = models.PositiveIntegerField()
