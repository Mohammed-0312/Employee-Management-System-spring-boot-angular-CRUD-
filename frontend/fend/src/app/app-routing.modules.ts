import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
//import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './login/login.component';
import { authGuard } from './auth.guard';
//import { LoginPageComponent } from './login-page/login-page.component'; // Import the login page component

const routes: Routes = [
  { path: 'login', component: LoginPageComponent }, // Login page, accessible to all
  { path: 'employees', component: EmployeeListComponent, canActivate: [authGuard] }, // Guarded employees route
  { path: '', redirectTo: 'login', pathMatch: 'full' } // Default route to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
