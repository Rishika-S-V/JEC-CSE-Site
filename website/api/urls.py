from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r"students", views.StudentModelViewSet)
router.register(r"staffs", views.StaffModelViewSet)
router.register(r"alumni-work", views.AlumniWorkModelViewSet)
router.register(r"event-photos", views.EventPhotoModelViewSet)
router.register(r"event-videos", views.EventVideoModelViewSet)
router.register(r"event-model", views.EventModelViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("students/batch/<int:batch>", views.StudentBatchView.as_view()),
    path("alumni/", views.AlumniListView.as_view()),
    path("alumni/<int:id>", views.AlumniDetailView.as_view()),
    path("alumni-work/multivalued/<int:id>", views.AlumniWorkMultivaluedView.as_view()),
    path("event/", views.EventListView.as_view()),
    path("event/<int:id>", views.EventDetailView.as_view()),
    path(
        "event-photos/multivalued/<int:id>", views.EventPhotosMultivaluedView.as_view()
    ),
    path(
        "event-videos/multivalued/<int:id>", views.EventVideosMultivaluedView.as_view()
    ),
]
