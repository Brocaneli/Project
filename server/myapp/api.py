from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import CicloSerializer, TurmaSerializer, UserSerializer, AvisoSerializer, AulaSerializer, PresencaSerializer, AlunoSerializer, ColaboradorSerializer, MatriculaSerializer
from .models import Ciclo, Turma, User, Aviso, Aula, Presenca, Colaborador, Matricula, Aluno

class CicloApi(viewsets.ModelViewSet):
    queryset = Ciclo.objects.all()
    serializer_class = CicloSerializer

class TurmaApi(viewsets.ModelViewSet):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('ciclo_id', )

class UserApi(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class AvisoApi(viewsets.ModelViewSet):
    queryset = Aviso.objects.all()
    serializer_class = AvisoSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user', 'turma', )

class AulaApi(viewsets.ModelViewSet):
    queryset = Aula.objects.all()
    serializer_class = AulaSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('turma_id', )

class PresencaApi(viewsets.ModelViewSet):
    queryset = Presenca.objects.all()
    serializer_class = PresencaSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user_id', 'aula_id', )

class ColaboradorApi(viewsets.ModelViewSet):
    queryset = Colaborador.objects.all()
    serializer_class = ColaboradorSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user_id', 'turma_id', )

class AlunoApi(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user_id', 'turma_id', )

class MatriculaApi(viewsets.ModelViewSet):
    queryset = Matricula.objects.all()
    serializer_class = MatriculaSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user_id', 'turma_id', )