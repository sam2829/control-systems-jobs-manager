from rest_framework import generics
from .models import Note
from rest_framework.permissions import IsAuthenticated
from control_systems_jobs.permissions import IsOwnerOrReadOnly
from .serializers import NoteSerializer
from django_filters.rest_framework import DjangoFilterBackend


class NoteList(generics.ListCreateAPIView):
    """
    This class is render and create notes
    """
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'job'
    ]

    #create owner field when note created
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)