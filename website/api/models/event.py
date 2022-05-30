from django.db import models

from . import Student


class Event(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()
    date = models.DateTimeField()
    venue = models.CharField(max_length=256)
    poster = models.FileField(
        upload_to="events/posters", null=True, blank=True, max_length=1024
    )
    cover_picture = models.FileField(
        upload_to="events/cover_pictures", null=True, blank=True, max_length=1024
    )
    coordinators = models.ManyToManyField(Student, related_name="events_coordinated")

    def __str__(self) -> str:
        return self.title


class EventPhoto(models.Model):
    path = models.FileField(upload_to="events/photos", max_length=1024)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="photos")


class EventVideo(models.Model):
    path = models.FileField(upload_to="events/videos", max_length=1024)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="videos")


class EventWinner(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    position = models.PositiveIntegerField()
    photo = models.FileField(
        upload_to="events/winners", max_length=1024, null=True, blank=True
    )
    students = models.ManyToManyField(Student, related_name="events_won")

    def __str__(self) -> str:
        return f"{self.event.title} {{{self.position}}} "

    class Meta:
        unique_together = [["event", "position"]]
