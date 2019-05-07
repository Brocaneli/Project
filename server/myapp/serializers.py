from rest_framework import serializers

from .models import Ciclo, Turma, User, Aviso, Aula, Presenca, Colaborador, Matricula, Aluno

class CicloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciclo
        fields = '__all__'

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'
        depth = 1

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class AvisoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aviso
        fields = '__all__'
        depth = 2

class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'

class PresencaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presenca
        fields = ('aula', 'user', 'presences', 'is_replacement')
        depth = 1

class ColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        fields = ('user', 'turma')
        depth = 2

class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ('user', 'turma')
        depth = 2

class MatriculaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matricula
        fields = ('user', 'turma')
        depth = 2