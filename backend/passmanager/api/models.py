from django.db import models

class Structure(models.Model):
    passwd = models.CharField(max_length=100, null=True)
    passphrase = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    title = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.username} and {self.title}" 
