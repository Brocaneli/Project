from django.contrib import admin

from .models import Ciclo, Turma, User, Aviso, Aula, Presenca, Colaborador, Matricula

admin.site.register(Ciclo)
admin.site.register(Turma)
admin.site.register(User)
admin.site.register(Aviso)
admin.site.register(Aula)
admin.site.register(Presenca)
admin.site.register(Colaborador)
admin.site.register(Matricula)