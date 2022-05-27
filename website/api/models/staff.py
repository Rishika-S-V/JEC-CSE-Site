from django.db import models

from datetime import date


class Staff(models.Model):
    staff_no = models.CharField(max_length=128)
    name = models.CharField(max_length=256)
    dob: date = models.DateField()
    date_of_experience: date = models.DateField()
    date_of_joining: date = models.DateField()
    designation = models.CharField(max_length=64)
