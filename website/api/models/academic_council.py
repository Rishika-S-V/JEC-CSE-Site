from django.db import models
from datetime import datetime

from ..models import Staff


class AcademicCouncil(models.Model):
    HOD = "HOD"
    MEMBER = "Member"
    DESIGNATION = ((HOD, "HOD"), (MEMBER, "Member"))
    staff = models.OneToOneField(Staff, on_delete=models.CASCADE)
    designation = models.CharField(max_length=64, choices=DESIGNATION)


class AcademicCouncilMeeting(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()
    date: datetime = models.DateTimeField()
    report = models.FileField(upload_to="academic_council_reports", null=True)
