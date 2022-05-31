from .student import StudentSerializer
from .staff import (
    StaffSerializer,
    StaffAchievementSerializer,
)
from .alumni import AlumniModelSerializer, AlumniWorkModelSerializer
from .event import (
    EventSerializer,
    EventPhotoSerializer,
    EventVideoSerializer,
    EventWinnerSerializer,
)
from .infrastructure import InfrastructureSerializer, InfrastructureImageSerializer
from .academic_council import (
    AcademicCouncilSerializer,
    AcademicCouncilMeetingSerializer,
)
from .student_achievement import StudentAchievementSerializer
