from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import patterns, include, url
from django.contrib.staticfiles import views

from django.contrib.staticfiles.urls import staticfiles_urlpatterns 

from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    url(r'^$', 'lucasgallen.views.home'),
    url(r'^home(?#about)/$', 'lucasgallen.views.home'),
    url(r'^contact/$', 'lucasgallen.views.contact'),
    url(r'^library/$', 'lucasgallen.views.library'),
    url(r'^review/book/(?P<name>[\w-]+)/$', 'lucasgallen.views.book_article'),
    url(r'^gameoflife/$', 'lucasgallen.views.gameoflife'),
    url(r'^admin/', include(admin.site.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
