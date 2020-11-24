from rest_framework.generics import ListAPIView
from backend.devskills.models import Devskill
from .serializers import DevskillSerializer


class DevskillListView(ListAPIView):
    queryset = Devskill.objects.all()
    serializer_class = DevskillSerializer
