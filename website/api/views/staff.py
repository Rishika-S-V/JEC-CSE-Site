from rest_framework import viewsets

from ..models import Staff
from ..serializers import StaffSerializer


class StaffModelViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer
