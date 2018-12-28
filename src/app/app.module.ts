import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { DeplacementFromUserComponent } from './deplacement-from-user/deplacement-from-user.component';
import { DeplacementFromUserYearMonthComponent } from './deplacement-from-user-year-month/deplacement-from-user-year-month.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    DeplacementFromUserComponent,
    DeplacementFromUserYearMonthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
