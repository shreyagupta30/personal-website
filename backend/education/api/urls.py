from django.urls import path
from .views import EducationListView

urlpatterns = [path('', EducationListView.as_view())]
