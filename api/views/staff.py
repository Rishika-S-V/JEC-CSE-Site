from rest_framework import viewsets, views
from rest_framework.response import Response
from rest_framework.request import Request

from ..models import Staff, StaffAchievement, Subject, Project
from ..serializers import (
    StaffSerializer,
    StaffAchievementSerializer,
    SubjectSerializer,
    ProjectSerializer,
)


class StaffModelViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

    def retrieve(self, request, pk: int, *args, **kwargs):
        achievements = StaffAchievement.objects.filter(staff=pk)

        res = StaffSerializer(self.get_object()).data
        res["achievements"] = {}
        for cat_id, category in StaffAchievement.category.field.choices:
            res["achievements"][category] = [
                StaffAchievementSerializer(instance).data
                for instance in achievements
                if instance.category == cat_id
            ]

        res["subjects"] = [
            SubjectSerializer(instance).data
            for instance in Subject.objects.filter(pk__in=res["subjects"])
        ]

        res["projects_mentored"] = [
            ProjectSerializer(instance).data
            for instance in Project.objects.filter(mentor=pk)
        ]
        return Response(res)


class StaffAchievementModelViewSet(viewsets.ModelViewSet):
    queryset = StaffAchievement.objects.all()
    serializer_class = StaffAchievementSerializer
