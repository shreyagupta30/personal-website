from rest_framework import serializers
from backend.awards.models import Award


class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = '__all__'
