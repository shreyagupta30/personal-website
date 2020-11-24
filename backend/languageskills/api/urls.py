from django.urls import path
from .views import LanguageskillListView

urlpatterns = [path('', LanguageskillListView.as_view())]
