from django.urls import path
from .views import DevskillListView

urlpatterns = [path('', DevskillListView.as_view())]
