from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r"students", views.StudentModelViewSet)
router.register(r"staffs", views.StaffModelViewSet)

urlpatterns = [
    path("", views.index, name="index"),
    path("api/", include(router.urls)),
    path("api/students/batch/<batch>", views.StudentBatchView.as_view()),
]
