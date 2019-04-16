from django.conf.urls import url
from .api import CicloApi, TurmaApi, TurmaSearchApi, UserApi, AvisoApi

urlpatterns = [
    url(r'^ciclos$', CicloApi.as_view()),
    url(r'^turmas$', TurmaApi.as_view()),
    url(r'^users$', UserApi.as_view()),
    url(r'^avisos$', AvisoApi.as_view()),
    url(r'^turma$', TurmaSearchApi.as_view())
]