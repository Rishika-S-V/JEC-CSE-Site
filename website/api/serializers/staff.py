from multiprocessing.sharedctypes import Value
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
        return timezone.now().year - instance.date_of_experience.year

    def validate_bio_data(self, fname):
        if fname.name.split(".")[-1] not in ["pdf"]:
            raise serializers.ValidationError("only pdf is allowed")
        return fname
