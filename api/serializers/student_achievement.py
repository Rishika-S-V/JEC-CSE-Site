from rest_framework import serializers

from ..models import StudentAchievement


class StudentAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentAchievement
        fields = "__all__"
