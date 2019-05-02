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
import { MatExpansionModule, MatInputModule, MatButtonModule, MatExpansionPanel } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsPageComponent } from './students-page/students-page.component';
import { AttendanceComponent } from './attendance/attendance.component';


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
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
