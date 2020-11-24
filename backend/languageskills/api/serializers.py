from rest_framework import serializers
from backend.languageskills.models import Languageskill


class LanguageskillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Languageskill
        fields = '__all__'
