import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TurmasPageComponent } from './turmas-page/turmas-page.component';
import { NovaTurmaPageComponent } from './nova-turma-page/nova-turma-page.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { PermissionsDetailComponent } from './permissions-detail/permissions-detail.component';

import { StudentPageComponent } from './student-page/student-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminPageComponent,
    TurmasPageComponent,
    NovaTurmaPageComponent,
    PermissionsComponent,
    PermissionsDetailComponent,
    StudentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
