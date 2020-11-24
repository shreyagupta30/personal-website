from rest_framework.generics import ListAPIView
from backend.frameworkskills.models import Frameworkskill
from .serializers import FrameworkskillSerializer


class FrameworkskillListView(ListAPIView):
    queryset = Frameworkskill.objects.all()
    serializer_class = FrameworkskillSerializer
