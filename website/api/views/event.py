from rest_framework import views, viewsets
from rest_framework.response import Response
from rest_framework.request import Request


from ..models import Event, EventPhoto, EventVideo, Student, EventWinner
from ..serializers import (
    EventSerializer,
    EventPhotoSerializer,
    EventWinnerSerializer,
    EventVideoSerializer,
    StudentSerializer,
)


class EventPhotoModelViewSet(viewsets.ModelViewSet):
    queryset = EventPhoto.objects.all()
    serializer_class = EventPhotoSerializer


class EventVideoModelViewSet(viewsets.ModelViewSet):
    queryset = EventVideo.objects.all()
    serializer_class = EventVideoSerializer


class EventWinnerModelViewSet(viewsets.ModelViewSet):
    queryset = EventWinner.objects.all()
    serializer_class = EventWinnerSerializer


class EventModelViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventListView(views.APIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get(self, request: Request, *args, **kwargs):
        res = [EventSerializer(instance).data for instance in Event.objects.all()]
        for val in res:
            winners_data = [
                EventWinnerSerializer(instance).data
                for instance in EventWinner.objects.filter(event=val.get("id"))
            ]
            val["pictures"] = [
                EventPhotoSerializer(instance, context={"request": request}).data.get(
                    "path"
                )
                for instance in EventPhoto.objects.filter(event=val.get("id"))
            ]
            val["videos"] = [
                EventVideoSerializer(instance, context={"request": request}).data.get(
                    "path"
                )
                for instance in EventVideo.objects.filter(event=val.get("id"))
            ]
            val["coordinators"] = [
                StudentSerializer(Student.objects.get(id=pk)).data
                for pk in val.get("coordinators")
            ]
            winners = {}
            for data in winners_data:
                winners[data.get("position")] = [
                    StudentSerializer(Student.objects.get(id=id)).data
                    for id in data.get("students")
                ]
            val["winners"] = winners
        return Response(res)


class EventDetailView(views.APIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get(self, request: Request, id: int, *args, **kwargs):
        res = EventSerializer(Event.objects.get(id=id)).data
        winners_data = [
            EventWinnerSerializer(instance).data
            for instance in EventWinner.objects.filter(event=id)
        ]

        res["pictures"] = [
            EventPhotoSerializer(instance, context={"request": request}).data.get(
                "path"
            )
            for instance in EventPhoto.objects.filter(event=res.get("id"))
        ]
        res["videos"] = [
            EventVideoSerializer(instance, context={"request": request}).data.get(
                "path"
            )
            for instance in EventVideo.objects.filter(event=res.get("id"))
        ]
        res["coordinators"] = [
            StudentSerializer(Student.objects.get(id=pk)).data
            for pk in res.get("coordinators")
        ]
        winners = {}
        for data in winners_data:
            winners[data.get("position")] = [
                StudentSerializer(Student.objects.get(id=id)).data
                for id in data.get("students")
            ]
        res["winners"] = winners

        return Response(res)


class EventPhotosMultivaluedView(views.APIView):
    queryset = EventPhoto.objects.all()
    serializer_class = EventPhotoSerializer

    def get(self, request: Request, id: int, *args, **kwargs):
        res = [
            EventPhotoSerializer(instance, context={"request": request}).data
            for instance in EventPhoto.objects.filter(event=id)
        ]
        return Response(res)


class EventVideosMultivaluedView(views.APIView):
    queryset = EventVideo.objects.all()
    serializer_class = EventVideoSerializer

    def get(self, request: Request, id: int, *args, **kwargs):
        res = [
            EventVideoSerializer(instance, context={"request": request}).data
            for instance in EventVideo.objects.filter(event=id)
        ]
        return Response(res)
