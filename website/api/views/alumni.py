from rest_framework import views, viewsets
import json
from rest_framework.response import Response
from rest_framework.request import Request


from ..models import Alumni, Student, AlumniWork
from ..serializers import (
    StudentSerializer,
    AlumniModelSerializer,
    AlumniWorkModelSerializer,
)


class AlumniListView(views.APIView):
    queryset = Alumni.objects.all()
    serializer_class = AlumniModelSerializer

    def get(self, request: Request, *args, **kwargs):
        res = [
            AlumniModelSerializer(instance).data for instance in Alumni.objects.all()
        ]
        for idx, val in enumerate(res):
            val["student"] = StudentSerializer(
                Student.objects.get(id=val.get("student"))
            ).data
            val["works"] = [
                AlumniWorkModelSerializer(instance).data
                for instance in AlumniWork.objects.filter(alumni=val.get("id"))
            ]
        return Response(res)

    def post(self, request: Request, *args, **kwargs):
        data = json.loads(request.body)
        works_objs = list()
        try:
            stud_obj = Student.objects.get(id=data.get("student"))
        except:
            return Response(
                {"error": f"Cannot find the student with id {data.get('student')}"},
                status=500,
            )

        alumni = Alumni.objects.create(student=stud_obj)
        alumni.save()

        for work in data.get("works"):
            print(work)
            x = AlumniWork.objects.create(**work, alumni=alumni)
            works_objs.append(work)
            try:
                x.save()
            except:
                return Response({"error": "Cannot save AlumniWork"}, status=500)

        return Response(
            {"detail": f"Successfully created an alumni with id {alumni.id}"}
        )


class AlumniDetailView(views.APIView):
    queryset = Alumni.objects.all()
    serializer_class = AlumniModelSerializer

    def get(self, request: Request, id: int, *args, **kwargs):
        res = AlumniModelSerializer(Alumni.objects.get(id=id)).data
        res["student"] = StudentSerializer(
            Student.objects.get(id=res.get("student"))
        ).data
        res["works"] = [
            AlumniWorkModelSerializer(instance).data
            for instance in AlumniWork.objects.filter(alumni=id)
        ]
        return Response(res)

    def delete(self, request: Request, id: int, *args, **kwargs):
        alumni = Alumni.objects.get(id=id)
        works = alumni.works.all()
        for work in works:
            work.delete()
        alumni.delete()
        return Response({"detail": "Successfully deleted alumni and their works"})


class AlumniWorkModelViewSet(viewsets.ModelViewSet):
    serializer_class = AlumniWorkModelSerializer
    queryset = AlumniWork.objects.all()


class AlumniWorkMultivaluedView(views.APIView):
    queryset = AlumniWork.objects.all()
    serializer_class = AlumniWorkModelSerializer

    def get(self, request: Request, id: int, *args, **kwargs):
        res = [
            AlumniWorkModelSerializer(instance).data
            for instance in AlumniWork.objects.filter(alumni=id)
        ]
        return Response(res)
