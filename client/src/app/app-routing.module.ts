import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TurmasPageComponent } from './turmas-page/turmas-page.component';
import { NovaTurmaPageComponent } from './nova-turma-page/nova-turma-page.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { PermissionsDetailComponent } from './permissions-detail/permissions-detail.component';
import { ColaboratorPageComponent } from './colaborator-page/colaborator-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'turmas', component: TurmasPageComponent},
  {path: 'nturma', component: NovaTurmaPageComponent},
  {path: 'users', component: PermissionsComponent},
  {path: 'permission/:id/:name', component: PermissionsDetailComponent},
  {path: 'colaborators', component: ColaboratorPageComponent},
  {path: 'students', component: StudentsPageComponent},
  {path: 'attendance', component: AttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
