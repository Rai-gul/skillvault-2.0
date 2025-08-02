import os
from django.conf import settings
from cryptography.fernet import Fernet
from django.db import models

# Pull the key from settings (already loaded from .env)
FERNET_KEY = settings.FERNET_KEY.encode()

class Note(models.Model):
    user            = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    encrypted_text  = models.BinaryField()
    created_at      = models.DateTimeField(auto_now_add=True)

    def set_text(self, plain_text: str):
        f = Fernet(FERNET_KEY)
        self.encrypted_text = f.encrypt(plain_text.encode())

    def get_text(self) -> str:
        f = Fernet(FERNET_KEY)
        return f.decrypt(self.encrypted_text).decode()

