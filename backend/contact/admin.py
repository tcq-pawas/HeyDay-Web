from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "phone",
        "email",
        "property_type",
        "contact_method",
        "location",
        "created_at",
    )

    readonly_fields = ("created_at",)

    search_fields = (
        "name",
        "phone",
        "email",
    )

    list_filter = (
        "contact_method",
        "property_type",
        "created_at",
    )

    ordering = ("-created_at",)

    fieldsets = (
        ("Customer Information", {
            "fields": (
                "name",
                "phone",
                "email",
            )
        }),

        ("Property Requirement", {
            "fields": (
                "subject",
                "property_type",
                "location",
                "budget",
                "area",
                "contact_method",
            )
        }),

        ("Message", {
            "fields": (
                "message",
            )
        }),

        ("System", {
            "fields": (
                "created_at",
            )
        }),
    )