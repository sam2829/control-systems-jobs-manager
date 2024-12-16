from django.contrib import admin
from .models import Note


class NoteAdmin(admin.ModelAdmin):
    """
    This class is for jobs displayed on admin page
    """
    list_display = (
        'owner', 'job', 'created_at'
    )
    search_fields = (
        'owner', 'job'
    )


admin.site.register(Note, NoteAdmin)
