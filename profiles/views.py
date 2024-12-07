from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer


class ProfileList(generics.ListAPIView):
    """
    This class is to render a list of all profiles
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateAPIView):
    """
    This class is to render a single profile by id and be
    able to update.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
