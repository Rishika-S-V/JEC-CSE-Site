from rest_framework import serializers

from ..models import Event, EventPhoto, EventVideo, EventWinner


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"

    def validate_poster_url(self, fname):
        if fname.name.split(".")[-1] not in ["jpg", "jpeg", "png", "pdf", "svg"]:
            raise serializers.ValidationError("only images/pdfs are allowed")
        return fname

    def validate_cover_picture_url(self, fname):
        if fname.name.split(".")[-1] not in ["jpg", "jpeg", "png", "svg"]:
            raise serializers.ValidationError("only image is allowed")
        return fname


class EventPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventPhoto
        fields = "__all__"

    def validate_path(self, fname):
        if fname.name.split(".")[-1] not in ["jpg", "jpeg", "png", "svg"]:
            raise serializers.ValidationError("only images are allowed")
        return fname


class EventVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventVideo
        fields = "__all__"

    def validate_path(self, fname):
        if fname.name.split(".")[-1] not in ["mp4"]:
            raise serializers.ValidationError("only videos are allowed")
        return fname


class EventWinnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventWinner
        fields = "__all__"
