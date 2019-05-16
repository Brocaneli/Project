from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import CicloSerializer, TurmaSerializer, UserSerializer, AvisoSerializer, AulaSerializer, PresencaSerializer, ColaboradorSerializer, MatriculaSerializer
from .serializers import GetCicloSerializer, GetTurmaSerializer, GetUserSerializer, GetAvisoSerializer, GetAulaSerializer, GetPresencaSerializer, GetColaboradorSerializer, GetMatriculaSerializer
from .models import Ciclo, Turma, User, Aviso, Aula, Presenca, Colaborador, Matricula

class CicloApi(viewsets.ModelViewSet):
    queryset = Ciclo.objects.all()
    
    def get_serializer_class(self):
        method = self.request.method
        if method == 'PUT' or method == 'POST':
            return CicloSerializer
        else:
            return GetCicloSerializer

class TurmaApi(viewsets.ModelViewSet):
    queryset = Turma.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('ciclo', )

    def get_serializer_class(self):
        method = self.request.method
        if method == 'PUT' or method == 'POST':
            return TurmaSerializer
        else:
            return GetTurmaSerializer

class UserApi(viewsets.ModelViewSet):
    queryset = User.objects.all()
    
    def get_serializer_class(self):
        method = self.request.method
        if method == 'PUT' or method == 'POST':
            return AvisoSerializer
        else:
            return GetAvisoSerializer
    
class AvisoApi(viewsets.ModelViewSet):
    queryset = Aviso.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user', 'turma',)

    def get_serializer_class(self):
        method = self.request.method
        if method == 'PUT' or method == 'POST':
            return AvisoSerializer
        else:
            return GetAvisoSerializer

class AulaApi(viewsets.ModelViewSet):
    queryset = Aula.objects.all()
    serializer_class = AulaSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('ciclo',)

    def get_serializer_class(self):
        method = self.request.method
        if method == 'PUT' or method == 'POST':
            return AulaSerializer
        else:
            return GetAulaSerializer

class PresencaApi(viewsets.ModelViewSet):
    queryset = Presenca.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user', 'aula',)

    def get_serializer_class(self):
        method = self.request.method
        if method == 'PUT' or method == 'POST':
            return PresencaSerializer
        else:
            return GetPresencaSerializer

class ColaboradorApi(viewsets.ModelViewSet):
    queryset = Colaborador.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user', 'turma',)

    def get_serializer_class(self):
        method = self.request.method
        if method == 'PUT' or method == 'POST':
            return ColaboradorSerializer
        else:
            return GetColaboradorSerializer

class MatriculaApi(viewsets.ModelViewSet):
    queryset = Matricula.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('user', 'turma', 'approved',)

    def get_serializer_class(self):
        method = self.request.method
        if method == 'PUT' or method == 'POST':
            return MatriculaSerializer
        else:
            return GetMatriculaSerializer