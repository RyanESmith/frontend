import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { SpringIndependentComponent } from './spring-independent/spring-independent.component';
import { SpringDependentComponent } from './spring-dependent/spring-dependent.component';
import { AddEntityComponent } from './sample/add-entity/add-entity.component';
import { EditEntityComponent } from './sample/edit-entity/edit-entity.component';
import { DashboardComponent } from './sample/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    SpringIndependentComponent,
    SpringDependentComponent,
    AddEntityComponent,
    EditEntityComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
