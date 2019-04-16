from django.db import models
import datetime

class Ciclo(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "Ciclo: {}".format(self.name)

class Turma(models.Model):
    name = models.CharField(max_length=50)
    ciclo_id = models.ForeignKey(Ciclo, on_delete=models.CASCADE)
    start_date = models.DateTimeField(default=datetime.datetime.today)
    end_date = models.DateTimeField(default=datetime.datetime.today)
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "Turma: {}".format(self.name)

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=11)
    password = models.CharField(max_length=30)
    role = models.CharField(max_length=15)
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "User: {}".format(self.name)

class Aviso(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    turma_id = models.ForeignKey(Turma, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "Aviso: {}".format(self.title)

class Aula(models.Model):
    turma_id = models.ForeignKey(Turma, on_delete=models.CASCADE)
    start_date = models.DateTimeField(default=datetime.datetime.today)
    end_date = models.DateTimeField(default=datetime.datetime.today)
    created_at = models.DateTimeField(default=datetime.datetime.today)
    total_classes = models.IntegerField()

    def __str__(self):
        return "Aula: Turma={}, Start Date={}, End Date={}".format(self.turma_id, self.start_date, self.end_date)

class Presenca(models.Model):
    aula_id = models.ForeignKey(Aula, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    presences = models.IntegerField()
    is_replacement = models.BooleanField()
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "Presença: Aula={}, User={}, Presences={}".format(self.aula_id, self.user_id, self.presences)

class Colaborador(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    turma_id = models.ForeignKey(Turma, on_delete=models.CASCADE)

    def __str__(self):
        return "Colaborador: User={}, Turma={}".format(self.user_id, self.turma_id)

class Matricula(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    turma_id = models.ForeignKey(Turma, on_delete=models.CASCADE)
    nota = models.IntegerField()
    approved = models.BooleanField(default=False)