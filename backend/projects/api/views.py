from rest_framework.generics import ListAPIView
from backend.projects.models import Project
from .serializers import ProjectSerializer


class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
