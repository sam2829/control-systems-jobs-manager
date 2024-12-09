from rest_framework import serializers
from .models import Note
from django.contrib.humanize.templatetags.humanize import naturaltime


class NoteSerializer(serializers.ModelSerializer):
    """
    This class is to serialize the note data
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner
    
    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    class Meta:
        model = Note
        fields = [
            'id', 'owner', 'job', 'created_at', 'updated_at', 'content',
            'is_owner'
        ]


class NoteDetailSerializer(NoteSerializer):
    """
    This class is to serialize note detail data. Job is a
    read only field so we don't have to set it on each update
    """
    job = serializers.ReadOnlyField(source='job.id')
