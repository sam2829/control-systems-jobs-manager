from rest_framework import generics, filters
from .models import Job
from .serializers import JobSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Count


class JobList(generics.ListCreateAPIView):
    """
    This class is to render list of all jobs
    """
    queryset = Job.objects.annotate(
        notes_count=Count('note', distinct=True)
    )
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]
    # For filtering Job list in frontend
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'workshop_status',
        'syspal_status'
    ]
    search_fields = ['csa_number', 'syspal_number']


class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    This class is to render a single job by id, and able 
    to update or delete
    """
    queryset = Job.objects.annotate(
        notes_count=Count('note', distinct=True)
    )
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]

    # override destroy method so non superusers cant delete jobs
    def destroy(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise PermissionDenied(
                "You do not have permission to delete this job"
            )
        return super().destroy(request, *args, **kwargs)
