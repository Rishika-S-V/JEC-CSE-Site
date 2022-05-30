from rest_framework import serializers

from ..models import Infrastructure, InfrastructureImage


class InfrastructureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Infrastructure
        fields = "__all__"


class InfrastructureImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfrastructureImage
        fields = "__all__"

    def validate_path(self, fname):
        if fname.name.split(".")[-1] not in ["jpg", "jpeg", "png", "svg"]:
            raise serializers.ValidationError("only images are allowed")
        return fname
