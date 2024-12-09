from django.contrib import admin
from .models import Job


class JobAdmin(admin.ModelAdmin):
    """
    This class is for jobs displayed on admin page
    """
    list_display = (
        'csa_number', 'syspal_number', 'description', 'quantity'
    )
    search_fields = (
        'csa_number', 'syspal_number'
    )


admin.site.register(Job, JobAdmin)
