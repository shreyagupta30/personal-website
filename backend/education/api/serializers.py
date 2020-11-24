from rest_framework import serializers
from backend.education.models import Education


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'
