from rest_framework.generics import ListAPIView, RetrieveAPIView

from django_filters.rest_framework import DjangoFilterBackend

from .serializers import CicloSerializer, TurmaSerializer, UserSerializer, AvisoSerializer
from .models import Ciclo, Turma, User, Aviso

class CicloApi(ListAPIView):
    queryset = Ciclo.objects.all()
    serializer_class = CicloSerializer

class TurmaApi(ListAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class UserApi(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class AvisoApi(ListAPIView):
    queryset = Aviso.objects.all()
    serializer_class = AvisoSerializer

class TurmaSearchApi(ListAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('ciclo',)