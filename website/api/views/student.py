from rest_framework import viewsets
from rest_framework import views
from rest_framework.response import Response

from ..models import Student
from ..serializers import StudentSerializer


class StudentModelViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentBatchView(views.APIView):
    def get(self, request, batch, format=None):
        students = [
            StudentSerializer(s).data for s in Student.objects.filter(batch=batch).all()
        ]
        return Response(students)
