from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    """
    This class is to serialize the profile data
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner
    
    # function for only letting superuser edit work location
    def update(self, instance, validated_data):
        request = self.context['request']

        # check if work location is being changed
        if 'work_location' in validated_data:
            if validated_data['work_location'] != instance.work_location:
                # check if superuser
                if not request.user.is_superuser:
                    raise serializers.ValidationError(
                        {"work_location": "Only superusers can update work location."}
                    )
                
        return super().update(instance, validated_data)

    class Meta:
        model = Profile
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'name',
            'work_location', 'is_owner'
        ]