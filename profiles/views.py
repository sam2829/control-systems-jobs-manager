from rest_framework import generics, permissions
from rest_framework.exceptions import PermissionDenied
from .models import Profile
from .serializers import ProfileSerializer
from control_systems_jobs.permissions import IsOwnerOrReadOnly


class ProfileList(generics.ListAPIView):
    """
    This class is to render a list of all profiles
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    This class is to render a single profile by id and be
    able to update.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    # overide destroy method so only super users can delete profiles
    def destroy(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise PermissionDenied(
                "You do not have permission to delete this profile!"
            )
        return super().destroy(request, *args, **kwargs)
