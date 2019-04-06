from django.conf.urls import url
from .api import ListApi, CardApi, ListDetailApi

urlpatterns = [
    url(r'^lists$', ListApi.as_view()),
    url(r'^cards$', CardApi.as_view()),
    url(r'^list-detail$', ListDetailApi.as_view())
]