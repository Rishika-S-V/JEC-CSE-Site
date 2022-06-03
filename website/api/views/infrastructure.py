from rest_framework import views, viewsets
from rest_framework.request import Request
from rest_framework.response import Response

from ..models import Infrastructure, InfrastructureImage
from ..serializers import InfrastructureSerializer, InfrastructureImageSerializer


class InfrastructureModelViewSet(viewsets.ModelViewSet):
    queryset = Infrastructure.objects.all()
    serializer_class = InfrastructureSerializer

    def list(self, request, *args, **kwargs):
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

    def retrieve(self, request, pk: int, *args, **kwargs):
        res = InfrastructureSerializer(Infrastructure.objects.get(id=pk)).data
        res["images"] = [
            InfrastructureImageSerializer(
                instance, context={"request": request}
            ).data.get("path")
            for instance in InfrastructureImage.objects.filter(infrastructure=pk)
        ]
        return Response(res)


class InfrastructureImagesModelViewSet(viewsets.ModelViewSet):
    queryset = InfrastructureImage.objects.all()
    serializer_class = InfrastructureImageSerializer

    def retrieve(self, request, pk: int, *args, **kwargs):
        res = [
            InfrastructureImageSerializer(instance).data.get("path")
            for instance in InfrastructureImage.objects.filter(infrastructure=pk)
        ]
        return Response(res)
