from rest_framework import viewsets

from ..models import StudentAchievement
from ..serializers import StudentAchievementSerializer


class StudentAchievementModelViewSet(viewsets.ModelViewSet):
    queryset = StudentAchievement.objects.all()
    serializer_class = StudentAchievementSerializer
