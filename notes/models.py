from django.db import models
from django.contrib.auth.models import User
from jobs.models import Job


class Note(models.Model):
    """
    Note class is tot store all the different notes
    on each job
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField(max_length=300)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"Note by {self.owner.username} on job {self.job.csa_number}"
