from django.urls import path
from .views import AwardListView

urlpatterns = [path('', AwardListView.as_view())]
