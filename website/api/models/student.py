from django.db import models


from datetime import date


class Student(models.Model):
    roll_no = models.CharField(max_length=128, null=True)
    name = models.CharField(max_length=128)
    dob: date = models.DateField()
    batch = models.PositiveIntegerField()
