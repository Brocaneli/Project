from django.urls import include, path
from .api import CicloApi, TurmaApi, UserApi, AvisoApi, AulaApi, PresencaApi, ColaboradorApi, MatriculaApi
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'ciclos', CicloApi),
router.register(r'turmas', TurmaApi),
router.register(r'users', UserApi),
router.register(r'avisos', AvisoApi),
router.register(r'aulas', AulaApi),
router.register(r'presencas', PresencaApi),
router.register(r'colaboradores', ColaboradorApi),
router.register(r'matriculas', MatriculaApi)

urlpatterns = [
    path('', include(router.urls))
]