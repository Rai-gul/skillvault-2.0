from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    text = serializers.CharField(write_only=True)
    decrypted = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Note
        fields = ['id', 'text', 'decrypted', 'created_at']

    def create(self, validated_data):
        text = validated_data.pop('text')
        note = Note(user=self.context['request'].user)
        note.set_text(text)
        note.save()
        return note

    def get_decrypted(self, obj):
        return obj.get_text()
