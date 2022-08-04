from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.response import Response

from ..models import Project, Student
from ..serializers import ProjectSerializer, StudentSerializer


class ProjectModelViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def retrieve(self, request: Request, pk: int, *args, **kwargs):
        instance = self.get_object()
        res = ProjectSerializer(instance).data
        res["students"] = [
            StudentSerializer(Student.objects.get(id=id)).data
            for id in res.get("students")
        ]
        return Response(res)
