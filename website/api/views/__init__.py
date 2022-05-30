from .views import index
from .student import StudentModelViewSet, StudentBatchView
from .staff import StaffModelViewSet
from .alumni import (
    AlumniListView,
    AlumniDetailView,
    AlumniWorkModelViewSet,
    AlumniWorkMultivaluedView,
)
from .event import (
    EventPhotoModelViewSet,
    EventVideoModelViewSet,
    EventWinnerModelViewSet,
    EventModelViewSet,
    EventListView,
    EventDetailView,
    EventPhotosMultivaluedView,
    EventVideosMultivaluedView,
)
from .infrastructure import (
    InfrastructureModelViewSet,
    InfrastructureImagesModelViewSet,
    InfrastructureListView,
    InfrastructureDetailView,
)
