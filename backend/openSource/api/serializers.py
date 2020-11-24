from rest_framework import serializers
from backend.openSource.models import Opensource
from backend.accomplishment.models import Accomplishment


class AccomplishmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accomplishment
        fields = ['id', 'accomplishment']


class OpensourceSerializer(serializers.ModelSerializer):
    accomplishments = AccomplishmentSerializer(read_only=True, many=True)

    class Meta:
        model = Opensource
        fields = '__all__'
