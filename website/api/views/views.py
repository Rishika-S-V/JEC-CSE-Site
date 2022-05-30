from django.http import HttpRequest, HttpResponse, JsonResponse
from .. import models

# Create your views here.
def index(request: HttpRequest):
    return HttpResponse("JEC API")


def get_choices(request: HttpRequest):
    res = {}
    res["students"] = [
        (instance.id, str(instance)) for instance in models.Student.objects.all()
    ]
    res["staffs"] = [
        (instance.id, str(instance)) for instance in models.Staff.objects.all()
    ]
    res[
        "AcademicCouncil__designation"
    ] = models.AcademicCouncil.designation.field.choices
    return JsonResponse(res)
