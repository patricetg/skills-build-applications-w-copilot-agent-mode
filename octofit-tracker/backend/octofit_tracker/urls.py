"""octofit_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/

REST API endpoint format:
    https://$CODESPACE_NAME-8000.app.github.dev/api/[component]/
    https://localhost:8000/api/[component]/
Do not hard code $CODESPACE_NAME, use the environment variable in settings.py for ALLOWED_HOSTS.
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Example: path('api/activities/', ...)
    # All API endpoints should be under /api/[component]/
]
