from rest_framework import serializers
from backend.devskills.models import Devskill


class DevskillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devskill
        fields = '__all__'
