# backend/notes/views.py

from rest_framework import viewsets, permissions
from .models import Note                  # ← ensure Note is imported
from .serializers import NoteSerializer   # ← ensure your serializer is imported

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    permission_classes = [permissions.AllowAny]  # or IsAuthenticated if you re-enable auth
    serializer_class = NoteSerializer

    # If you want filtering by user later, you can override get_queryset():
    # def get_queryset(self):
    #     return Note.objects.filter(user=self.request.user)
