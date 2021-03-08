from django.urls import path
from .views import StructureView, retrieve_password

urlpatterns = [
    path('api/', StructureView.as_view()),
    path('api/retrieve/<str:passphrase>/<str:platform>', retrieve_password)
]
