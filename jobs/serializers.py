from rest_framework import serializers
from .models import Job


class JobSerializer(serializers.ModelSerializer):
    """
    This class is to serilaize the job data
    """
    # Created field to count the number of notes made
    notes_count = serializers.ReadOnlyField()

    # Super user can edit all fields
    def update(self, instance, validated_data):
        request = self.context['request']

        if request.user.is_superuser:
            return super().update(instance, validated_data)
        
        # regular users can only edit allowed fields
        user_location = request.user.profile.work_location
        allowed_fields = []

        if user_location == 'Workshop':
            allowed_fields = ['workshop_status']
        elif user_location == 'Syspal':
            allowed_fields = ['syspal_status']

        restricted_fields = [
            field for field in validated_data.keys() if field not in allowed_fields
        ]
        if restricted_fields:
            # Compare only the restricted fields to instance values to avoid unnecessary update attempts
            for field in restricted_fields:
                if validated_data.get(field) != getattr(instance, field):
                    raise serializers.ValidationError(
                        {"error": f"You are not authorized to edit these fields: {', '.join(restricted_fields)}"}
                    )
        
        return super().update(instance, validated_data)


    class Meta:
        model = Job
        fields = [
            'id', 'csa_number', 'syspal_number', 'order_number', 'quantity',
            'description', 'quote', 'date_created', 'workshop_status',
            'syspal_status', 'delivered', 'delivered_date', 'notes_count'
        ]