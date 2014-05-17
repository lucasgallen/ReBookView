from django.conf import settings
from django.conf.urls import patterns, include, static, url
from django.contrib.staticfiles import views

from django.contrib.staticfiles.urls import staticfiles_urlpatterns 

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'lucasgallen1.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', 'lucasgallen.views.home'),
    url(r'^home(?#about)/$', 'lucasgallen.views.home'),
    url(r'^contact/$', 'lucasgallen.views.contact'),
    url(r'^interests/$', 'lucasgallen.views.interest'),
    url(r'^gameoflife/$', 'lucasgallen.views.gameoflife'),
    url(r'^admin/', include(admin.site.urls)),
)
