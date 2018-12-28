import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { DeplacementFromUserComponent } from './deplacement-from-user/deplacement-from-user.component';
import { DeplacementFromUserYearMonthComponent } from './deplacement-from-user-year-month/deplacement-from-user-year-month.component';

const appRoutes: Routes = [
  { path: '', component: FrontOfficeComponent },
  { path: 'byUser/:user', component: DeplacementFromUserComponent },
  { path: 'byUserYearMonth/:user/:year/:month', component: DeplacementFromUserYearMonthComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }