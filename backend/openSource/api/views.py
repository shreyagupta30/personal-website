from rest_framework.generics import ListAPIView
from backend.openSource.models import Opensource
from .serializers import OpensourceSerializer


class OpensourceListView(ListAPIView):
    queryset = Opensource.objects.all()
    serializer_class = OpensourceSerializer
