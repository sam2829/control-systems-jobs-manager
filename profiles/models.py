from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class Profile(models.Model):
    """
    Profile class which is created automatically when user created
    """

    # List of location options
    WORKSHOP = 'Workshop'
    SYSPAL = 'Syspal'

    LOCATION_CHOICES = [
        (WORKSHOP, 'Workshop'),
        (SYSPAL, 'Syspal'),
    ]

    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=50, blank=True)
    work_location = models.CharField(
        max_length=15, choices=LOCATION_CHOICES, default='Workshop'
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.owner}'s profile"


# Code to create new profile everytime new user is created
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)


post_save.connect(create_profile, sender=User)
