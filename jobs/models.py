from django.db import models
from datetime import date


class Job(models.Model):
    """
    Job class is to store all the different jobs
    for control systems
    """

    # List of job status choices
    NOT_STARTED = 'Not Started'
    ONGOING = 'Ongoing'
    COMPLETE = 'Complete'

    STATUS_CHOICES = [
        (NOT_STARTED, 'Not Started'),
        (ONGOING, 'Ongoing'),
        (COMPLETE, 'Complete'),
    ]

    csa_number = models.CharField(max_length=10, unique=True)
    syspal_number = models.CharField(max_length=20)
    order_number = models.CharField(max_length=10)
    quantity = models.PositiveBigIntegerField(default=1)
    description = models.TextField(max_length=60)
    quote = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    workshop_status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default='Not Started'
    )
    syspal_status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default='Not Started'
    )
    delivered = models.BooleanField(default=False)
    delivered_date = models.DateField(blank=True, null=True)
    
    class Meta:
        ordering = ['-date_created']

    def __str__(self):
        return f"{self.csa_number} / {self.syspal_number} {self.quantity} off."
    

    def save(self, *args, **kwargs):
        # automatically save delivery date when delivered
        if self.delivered and not self.delivered_date:
            self.delivered_date = date.today()
        elif not self.delivered:
            self.delivered_date = None
        super().save(*args, **kwargs)
