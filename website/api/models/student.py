from django.db import models
from datetime import date


class Student(models.Model):
    name = models.CharField(max_length=128)
    dob = models.DateField()
    batch = models.PositiveIntegerField()

    @property
    def year(self):
        return date.today().year - self.dob.year
