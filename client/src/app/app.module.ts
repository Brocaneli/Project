import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PersonComponent } from './person/person.component';
import { ListsComponent } from './lists/lists.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { CardComponent } from './card/card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PersonComponent,
    ListsComponent,
    ListDetailsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
