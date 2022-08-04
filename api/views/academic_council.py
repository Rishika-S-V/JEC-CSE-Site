from rest_framework import views, viewsets

from ..models import AcademicCouncil, AcademicCouncilMeeting
from ..serializers import AcademicCouncilSerializer, AcademicCouncilMeetingSerializer


class AcademicCouncilViewSet(viewsets.ModelViewSet):
    queryset = AcademicCouncil.objects.all()
    serializer_class = AcademicCouncilSerializer


class AcademicCouncilMeetingViewSet(viewsets.ModelViewSet):
    queryset = AcademicCouncilMeeting.objects.all()
    serializer_class = AcademicCouncilMeetingSerializer
