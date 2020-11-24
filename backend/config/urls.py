from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

catchall = TemplateView.as_view(template_name='index.html')

urlpatterns = [
    path('', catchall),
    path("api-auth/", include("rest_framework.urls")),
    path("admin/", admin.site.urls),
    path("api/projects/", include("backend.projects.api.urls")),
    path("api/opensource/", include("backend.openSource.api.urls")),
    path("api/awards/", include("backend.awards.api.urls")),
    path("api/education/", include("backend.education.api.urls")),
    path("api/languageskills/", include("backend.languageskills.api.urls")),
    path("api/frameworkskills/", include("backend.frameworkskills.api.urls")),
    path("api/devskills/", include("backend.devskills.api.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
