from rest_framework import views, viewsets
import json
from rest_framework.response import Response
from rest_framework.request import Request


from ..models import Event, EventPhoto, EventVideo
from ..serializers import EventSerializer, EventPhotoSerializer, EventVideoSerializer


class EventPhotoModelViewSet(viewsets.ModelViewSet):
    queryset = EventPhoto.objects.all()
    serializer_class = EventPhotoSerializer


class EventVideoModelViewSet(viewsets.ModelViewSet):
    queryset = EventVideo.objects.all()
    serializer_class = EventVideoSerializer


class EventModelViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventListView(views.APIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get(self, request: Request, *args, **kwargs):
        res = [EventSerializer(instance).data for instance in Event.objects.all()]
        for val in res:
            val["pictures"] = [
                EventPhotoSerializer(instance, context={"request": request}).data
                for instance in EventPhoto.objects.filter(event=val.get("id"))
            ]
            val["videos"] = [
                EventVideoSerializer(instance, context={"request": request}).data
                for instance in EventVideo.objects.filter(event=val.get("id"))
            ]
        return Response(res)


class EventDetailView(views.APIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get(self, request: Request, id: int, *args, **kwargs):
        res = EventSerializer(Event.objects.get(id=id)).data

        res["pictures"] = [
            EventPhotoSerializer(instance, context={"request": request}).data
            for instance in EventPhoto.objects.filter(event=res.get("id"))
        ]
        res["videos"] = [
            EventVideoSerializer(instance, context={"request": request}).data
            for instance in EventVideo.objects.filter(event=res.get("id"))
        ]
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
