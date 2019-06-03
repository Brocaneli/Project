import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CiclosPageComponent } from './ciclos-page/ciclos-page.component';
import { NovoCicloPageComponent } from './novo-ciclo-page/novo-ciclo-page.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { PermissionsDetailComponent } from './permissions-detail/permissions-detail.component';
import { ColaboratorPageComponent } from './colaborator-page/colaborator-page.component';
import { MatExpansionModule, MatInputModule, MatButtonModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsPageComponent } from './students-page/students-page.component';
import { TurmasComponent } from './turmas/turmas.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NovoAvisoComponent } from './novo-aviso/novo-aviso.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe, UserPipe } from './search.pipe';
import { AprovarMatriculaComponent } from './aprovar-matricula/aprovar-matricula.component';
import { AulaPageComponent } from './aula-page/aula-page.component';
import { NovaAulaComponent } from './nova-aula/nova-aula.component';
import { CicloqueryComponent } from './cicloquery/cicloquery.component';
import { TurmaqueryComponent } from './turmaquery/turmaquery.component';
import { StudentqueryComponent } from './studentquery/studentquery.component';
import { NovaMatriculaComponent } from './nova-matricula/nova-matricula.component';
import { AprovarAlunosComponent } from './aprovar-alunos/aprovar-alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminPageComponent,
    CiclosPageComponent,
    NovoCicloPageComponent,
    PermissionsComponent,
    PermissionsDetailComponent,
    ColaboratorPageComponent,
    StudentsPageComponent,
    TurmasComponent,
    AttendanceComponent,
    NovoAvisoComponent,
    ListaAlunosComponent,
    SearchPipe,
    UserPipe,
    AprovarMatriculaComponent,
    AprovarAlunosComponent,
    AulaPageComponent,
    NovaAulaComponent,
    CicloqueryComponent,
    TurmaqueryComponent,
    StudentqueryComponent,
    NovaMatriculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
