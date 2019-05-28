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
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { AprovarMatriculaComponent } from './aprovar-matricula/aprovar-matricula.component';
import { CicloqueryComponent } from './cicloquery/cicloquery.component';
import { TurmaqueryComponent } from './turmaquery/turmaquery.component';
import { StudentqueryComponent } from './studentquery/studentquery.component';

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
  { path: 'attendance', component: AttendanceComponent },
  { path: 'lista-alunos/:id', component: ListaAlunosComponent },
  { path: 'aprovacao/:id', component: AprovarMatriculaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
