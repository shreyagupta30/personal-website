from rest_framework import serializers
from backend.frameworkskills.models import Frameworkskill


class FrameworkskillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frameworkskill
        fields = '__all__'
