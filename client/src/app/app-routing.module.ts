import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CiclosPageComponent } from './ciclos-page/ciclos-page.component';
import { NovoCicloPageComponent } from './novo-ciclo-page/novo-ciclo-page.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { PermissionsDetailComponent } from './permissions-detail/permissions-detail.component';
import { ColaboratorPageComponent } from './colaborator-page/colaborator-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { TurmasComponent } from './turmas/turmas.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NovoAvisoComponent } from './novo-aviso/novo-aviso.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { AprovarMatriculaComponent } from './aprovar-matricula/aprovar-matricula.component';
import { AulaPageComponent } from './aula-page/aula-page.component';
import { NovaAulaComponent } from './nova-aula/nova-aula.component';
import { NovaMatriculaComponent } from './nova-matricula/nova-matricula.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'ciclos', component: CiclosPageComponent },
  { path: 'nciclo', component: NovoCicloPageComponent },
  { path: 'users', component: PermissionsComponent },
  { path: 'users/:id', component: PermissionsDetailComponent },
  { path: 'colaborators', component: ColaboratorPageComponent },
  { path: 'students', component: StudentsPageComponent },
  { path: 'turmas', component: TurmasComponent },
  { path: 'attendance/:id', component: AttendanceComponent },
  { path: 'lista-alunos/:id', component: ListaAlunosComponent },
  { path: 'aula/:id', component: AulaPageComponent },
  { path: 'aprovacao/:id', component: AprovarMatriculaComponent },
  {path: 'naviso', component: NovoAvisoComponent},
  {path: 'naula/:id', component: NovaAulaComponent},
  { path: 'aprovacao/:id', component: AprovarMatriculaComponent },
  { path: 'nova-matricula', component: NovaMatriculaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
