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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'ciclos', component: CiclosPageComponent},
  {path: 'nciclo', component: NovoCicloPageComponent},
  {path: 'users', component: PermissionsComponent},
  {path: 'permission/:id/:name', component: PermissionsDetailComponent},
  {path: 'colaborators', component: ColaboratorPageComponent},
  {path: 'students', component: StudentsPageComponent},
  {path: 'turmas', component: TurmasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
