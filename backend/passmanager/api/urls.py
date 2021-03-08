from django.urls import path
from .views import StructureView, detailView

urlpatterns = [
    path('api/', StructureView.as_view()),
]
