from rest_framework import views, viewsets
from rest_framework.request import Request
from rest_framework.response import Response

from ..models import Infrastructure, InfrastructureImage
from ..serializers import InfrastructureSerializer, InfrastructureImageSerializer


class InfrastructureModelViewSet(viewsets.ModelViewSet):
    queryset = Infrastructure.objects.all()
    serializer_class = InfrastructureSerializer


class InfrastructureImagesModelViewSet(viewsets.ModelViewSet):
    queryset = InfrastructureImage.objects.all()
    serializer_class = InfrastructureImageSerializer


class InfrastructureListView(views.APIView):
    queryset = Infrastructure.objects.all()
    serializer_class = InfrastructureSerializer

    def get(self, request: Request, *args, **kwargs):
        res = [
            InfrastructureSerializer(instance).data
            for instance in Infrastructure.objects.all()
        ]
        for val in res:
            val["images"] = [
                InfrastructureImageSerializer(
                    instance, context={"request": request}
                ).data.get("path")
                for instance in InfrastructureImage.objects.filter(
                    infrastructure=val.get("id")
                )
            ]
        return Response(res)


class InfrastructureDetailView(views.APIView):
    queryset = Infrastructure.objects.all()
    serializer_class = InfrastructureSerializer

    def get(self, request: Request, id: int, *args, **kwargs):
        res = InfrastructureSerializer(Infrastructure.objects.get(id=id)).data
        res["images"] = [
            InfrastructureImageSerializer(
                instance, context={"request": request}
            ).data.get("path")
            for instance in InfrastructureImage.objects.filter(infrastructure=id)
        ]
        return Response(res)
