from rest_framework import serializers
from django.utils import timezone

from ..models import Student


class StudentSerializer(serializers.ModelSerializer):
    age_ = serializers.SerializerMethodField()
    year_ = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = "__all__"

    def get_age_(self, instance: Student):
        return timezone.now().year - instance.dob.year

    def get_year_(self, instance: Student):
        return 4 - (instance.batch - timezone.now().year)
