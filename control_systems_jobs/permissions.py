from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    this class is to only allow user to edit their profile
    if they are the owner
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user or request.user.is_superuser