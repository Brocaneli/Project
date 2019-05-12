from django.db import models
import datetime

class Ciclo(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "Ciclo: {}".format(self.name)

class Turma(models.Model):
    name = models.CharField(max_length=50)
    ciclo = models.ForeignKey(Ciclo, on_delete=models.CASCADE)
    start_date = models.DateTimeField(default=datetime.datetime.today)
    end_date = models.DateTimeField(default=datetime.datetime.today)
    created_at = models.DateTimeField(default=datetime.datetime.today)
    actual_class = models.IntegerField()

    def __str__(self):
        return "Turma: {}".format(self.name)

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=11)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=15)
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "User: {}".format(self.name)

class Aviso(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    turma = models.ForeignKey(Turma, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "Aviso: {}".format(self.title)

class Aula(models.Model):
    turma_id = models.ForeignKey(Turma, on_delete=models.CASCADE)
    date = models.DateTimeField(default=datetime.datetime.today)
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "Aula: Turma={}, Date={}".format(self.turma_id, self.date)

class Presenca(models.Model):
    aula = models.ForeignKey(Aula, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    presence = models.BooleanField()
    is_replacement = models.BooleanField()
    created_at = models.DateTimeField(default=datetime.datetime.today)

    def __str__(self):
        return "Presença: Aula={}, User={}, Presence={}".format(self.aula, self.user, self.presence)

class Colaborador(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    turma = models.ForeignKey(Turma, on_delete=models.CASCADE)

    def __str__(self):
        return "Colaborador: User={}, Turma={}".format(self.user, self.turma)

class Matricula(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    turma = models.ForeignKey(Turma, on_delete=models.CASCADE)
    nota = models.IntegerField()
    approved = models.BooleanField(default=False)

    def __str__(self):
        return "Matricula: User={}, Turma={}, Nota={}, Approved={}".format(self.user, self.turma, self.nota, self.approved)