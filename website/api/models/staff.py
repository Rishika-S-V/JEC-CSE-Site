from sre_parse import CATEGORIES
from django.db import models

from datetime import date


class Staff(models.Model):
    staff_no = models.CharField(max_length=128)
    name = models.CharField(max_length=256)
    dob: date = models.DateField()
    date_of_experience: date = models.DateField()
    date_of_joining: date = models.DateField()
    designation = models.CharField(max_length=64)
    photo = models.FileField(upload_to="staff/photos", null=True)
    bio_data = models.FileField(upload_to="staff/bio_data", null=True)
    mail_id = models.CharField(max_length=1024, null=True)

    def __str__(self) -> str:
        return self.staff_no


class StaffAchievement(models.Model):
    PATENTS = "Patents"
    FDP = "FDP"
    WEBINARS_ORGANIZED = "Webinars Organized"
    SEMINARS_ORGANIZED = "Seminars Organized"
    WEBINARS_ATTENDED = "Webinars Attended"
    SEMINARS_ATTENDED = "Seminars Attended"
    NATIONAL_CONFERENCES = "National Conferences"
    INTERNATIONAL_CONFERENCE = "International Conference"
    WORKSHOP_ATTENDED = "Workshop Attended"
    INTERNATIONAL_JOURNAL_PUBLICATIONS = "International Journal Publications"
    COURSES = "Courses"

    CATEGORIES = (
        (0, PATENTS),
        (1, FDP),
        (2, WEBINARS_ORGANIZED),
        (3, SEMINARS_ORGANIZED),
        (4, WEBINARS_ATTENDED),
        (5, SEMINARS_ATTENDED),
        (6, NATIONAL_CONFERENCES),
        (7, INTERNATIONAL_CONFERENCE),
        (8, WORKSHOP_ATTENDED),
        (9, INTERNATIONAL_JOURNAL_PUBLICATIONS),
        (10, COURSES),
    )

    staff = models.ForeignKey(
        Staff, on_delete=models.CASCADE, related_name="achievements"
    )
    title = models.CharField(max_length=128)
    description = models.TextField()
    _date: date = models.DateField(null=True)
    file = models.FileField(upload_to="staff/achievements", null=True)
    category = models.IntegerField(choices=CATEGORIES, null=True)

    def __str__(self) -> str:
        return f"{self.staff.staff_no} ({CATEGORIES[self.category][1]}) -> {self.title}"
