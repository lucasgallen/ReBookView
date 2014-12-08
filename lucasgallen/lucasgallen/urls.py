from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import patterns, include, url
from django.contrib.staticfiles import views

from django.contrib.staticfiles.urls import staticfiles_urlpatterns 

from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    # Examples:
    # url(r'^$', 'lucasgallen1.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', 'lucasgallen.views.home'),
    url(r'^home(?#about)/$', 'lucasgallen.views.home'),
    url(r'^contact/$', 'lucasgallen.views.contact'),
    url(r'^interests/$', 'lucasgallen.views.interest'),
    url(r'^gameoflife/$', 'lucasgallen.views.gameoflife'),
    url(r'^admin/', include(admin.site.urls)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()

