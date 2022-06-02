from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Student)
admin.site.register(models.StudentAchievement)
admin.site.register(models.Staff)
admin.site.register(models.StaffAchievement)
admin.site.register(models.Alumni)
admin.site.register(models.AlumniWork)
admin.site.register(models.Project)
admin.site.register(models.Event)
admin.site.register(models.EventPhoto)
admin.site.register(models.EventVideo)
admin.site.register(models.EventWinner)
admin.site.register(models.AcademicCouncil)
admin.site.register(models.AcademicCouncilMeeting)
admin.site.register(models.Infrastructure)
admin.site.register(models.InfrastructureImage)
