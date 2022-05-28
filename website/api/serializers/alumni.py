from rest_framework import serializers

from ..models import Alumni, AlumniWork


class AlumniWorkModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlumniWork
        fields = "__all__"


class AlumniModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumni
        fields = "__all__"
