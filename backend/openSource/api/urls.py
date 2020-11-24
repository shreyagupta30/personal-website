from django.urls import path
from .views import OpensourceListView

urlpatterns = [path('', OpensourceListView.as_view())]
