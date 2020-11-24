from rest_framework.generics import ListAPIView
from backend.languageskills.models import Languageskill
from .serializers import LanguageskillSerializer


class LanguageskillListView(ListAPIView):
    queryset = Languageskill.objects.all()
    serializer_class = LanguageskillSerializer
