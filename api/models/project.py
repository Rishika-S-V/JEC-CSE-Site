from django.db import models

from ..models import Student, Staff


class Project(models.Model):
    title = models.CharField(max_length=1024)
    description = models.TextField()
    students = models.ManyToManyField(Student, related_name="projects")
    mentor = models.ForeignKey(
        Staff, related_name="projects_mentored", on_delete=models.DO_NOTHING
    )
    file = models.FileField(upload_to="projects", null=True)
