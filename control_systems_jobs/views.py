from dj_rest_auth.views import UserDetailsView
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CurrentUserSerializer
from .settings import (
    JWT_AUTH_COOKIE, JWT_AUTH_REFRESH_COOKIE, JWT_AUTH_SAMESITE,
    JWT_AUTH_SECURE
)
# from rest_framework.permissions import IsAuthenticated


class CurrentUserDetailsView(UserDetailsView):
    serializer_class = CurrentUserSerializer

# class CustomUserDetailsView(APIView):
#     permission_classes = [IsAuthenticated]
#     print("In view class but not get method")

#     def get(self, request, *args, **kwargs):
#         print("In view get method")
#         user = request.user  # This gets the authenticated user
#         serializer = CustomUserProfileSerializer(user)
#         return Response(serializer.data)


@api_view()
def root_route(request):
    return Response({
        "message": "Welcome to my control systems jobs API!"
    })


# dj-rest-auth logout view fix
@api_view(['POST'])
def logout_route(request):
    response = Response()
    response.set_cookie(
        key=JWT_AUTH_COOKIE,
        value='',
        httponly=True,
        expires='Thur, 01 Jan 1970 00:00:00 GMT',
        max_age=0,
        samesite=JWT_AUTH_SAMESITE,
        secure=JWT_AUTH_SECURE,
    )
    response.set_cookie(
        key=JWT_AUTH_REFRESH_COOKIE,
        value='',
        httponly=True,
        expires='Thur, 01 Jan 1970 00:00:00 GMT',
        max_age=0,
        samesite=JWT_AUTH_SAMESITE,
        secure=JWT_AUTH_SECURE,
    )
    return response
