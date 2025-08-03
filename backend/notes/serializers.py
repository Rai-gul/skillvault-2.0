from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Note

User = get_user_model()

class NoteSerializer(serializers.ModelSerializer):
    text      = serializers.CharField(write_only=True)
    decrypted = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model  = Note
        fields = ['id', 'text', 'decrypted', 'created_at']

    def create(self, validated_data):
        text = validated_data.pop('text')
        request = self.context.get('request')

        # If someone’s authenticated, use them; otherwise fall back to the first user
        if request and request.user.is_authenticated:
            user = request.user
        else:
            user = User.objects.first()

        note = Note(user=user)
        note.set_text(text)
        note.save()
        return note

    def get_decrypted(self, obj):
        return obj.get_text()
