from rest_framework import generics, filters
from .models import Job
from .serializers import JobSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from django_filters.rest_framework import DjangoFilterBackend


class JobList(generics.ListCreateAPIView):
    """
    This class is to render list of all jobs
    """
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    # For filtering Job list in frontend
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['csa_number', 'syspal_number']


class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    This class is to render a single job by id, and able 
    to update or delete
    """
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]

    # override destroy method so non superusers cant delete jobs
    def destroy(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise PermissionDenied(
                "You do not have permission to delete this job"
            )
        return super().destroy(request, *args, **kwargs)