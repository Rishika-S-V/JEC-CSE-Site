from rest_framework import viewsets
from rest_framework.response import Response

from ..models import StudentAchievement, Student
from ..serializers import StudentAchievementSerializer, StudentSerializer


class StudentAchievementModelViewSet(viewsets.ModelViewSet):
    queryset = StudentAchievement.objects.all()
    serializer_class = StudentAchievementSerializer

    def retrieve(self, request, pk: int, *args, **kwargs):
        instance = self.get_object()
        res = StudentAchievementSerializer(instance).data
        res["student"] = [
            StudentSerializer(instance).data
            for instance in Student.objects.filter(pk__in=res.get("student")).all()
        ]

        return Response(res)
