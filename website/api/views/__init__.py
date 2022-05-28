from .views import index
from .student import StudentModelViewSet, StudentBatchView
from .staff import StaffModelViewSet
from .alumni import (
    AlumniListView,
    AlumniDetailView,
    AlumniWorkModelViewSet,
    AlumniWorkMultivaluedView,
)
