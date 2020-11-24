from django.urls import path
from .views import FrameworkskillListView

urlpatterns = [path('', FrameworkskillListView.as_view())]
