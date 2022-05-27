from rest_framework import serializers
from django.utils import timezone

from ..models import Staff


class StaffSerializer(serializers.ModelSerializer):
    age_ = serializers.SerializerMethodField()
    experience_ = serializers.SerializerMethodField()

    class Meta:
        model = Staff
        fields = "__all__"

    def get_age_(self, instance: Staff):
        return timezone.now().year - instance.dob.year

    def get_experience_(self, instance: Staff):
        return 4 - (instance.date_of_experience.year - timezone.now().year)
