from django.db import models

# Create your models here.
class Education(models.Model):
    title = models.CharField(max_length=70)
    subTitle = models.CharField(max_length=120)
    description = models.TextField()
    scoring = models.CharField(max_length=70)

    def __str__(self):
        return self.title
