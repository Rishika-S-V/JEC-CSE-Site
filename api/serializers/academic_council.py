from rest_framework import serializers

from ..models import AcademicCouncil, AcademicCouncilMeeting


class AcademicCouncilSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicCouncil
        fields = "__all__"


class AcademicCouncilMeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicCouncilMeeting
        fields = "__all__"

    def validate_report(self, fname):
        if fname.name.split(".")[-1] not in ["pdf"]:
            raise serializers.ValidationError("only pdfs are allowed")
        return fname
