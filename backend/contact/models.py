from django.db import models


class Contact(models.Model):
    CONTACT_METHODS = [
        ("Phone", "Phone"),
        ("Email", "Email"),
        ("WhatsApp", "WhatsApp"),
        ("Video Call", "Video Call"),
    ]

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    contact_method = models.CharField(
        max_length=20,
        choices=CONTACT_METHODS,
        default="Phone",
    )

    property_type = models.CharField(max_length=100, blank=True)
    location = models.CharField(max_length=200, blank=True)
    budget = models.CharField(max_length=100, blank=True)
    area = models.CharField(max_length=100, blank=True)

    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name