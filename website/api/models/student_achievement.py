from django.db import models

from . import Student


class StudentAchievement(models.Model):
    student = models.ManyToManyField(Student, related_name="achievements")
    title = models.CharField(max_length=256)
    description = models.TextField(null=True)
    file = models.FileField(upload_to="students/achievements", null=True)
