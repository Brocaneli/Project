from rest_framework import serializers

from .models import Ciclo, Turma, User, Aviso, Aula, Presenca, Colaborador, Matricula

class GetCicloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciclo
        fields = '__all__'

class GetTurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'
        depth = 1

class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class GetAvisoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aviso
        fields = '__all__'
        depth = 2

class GetAulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'
        depth = 2


class GetPresencaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presenca
        fields = ('id', 'aula', 'user', 'presences', 'is_replacement')
        depth = 1

class GetColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        fields = ('id', 'user', 'turma')
        depth = 2

class GetMatriculaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matricula
        fields = ('id', 'user', 'turma', 'nota', 'approved', 'absences')
        depth = 2

## Write Serializers

class CicloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciclo
        fields = '__all__'

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class AvisoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aviso
        fields = '__all__'

class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'

class PresencaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presenca
        fields = '__all__'

class ColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        fields = '__all__'

class MatriculaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matricula
        fields = '__all__'