import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginPageComponent } from './login/login.component';
import { SinkDataComponent } from './sink-data/sink-data.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes =[
    {path: 'login', component: LoginPageComponent},
    {path: 'employees', component: EmployeeListComponent}, 
    {path: 'create-employee', component: CreateEmployeeComponent},
    
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'sink', component: SinkDataComponent},
    {path: 'employee-details/:id', component: EmployeeDetailsComponent},
    {path: 'update-employee/:id', component: UpdateEmployeeComponent}
  ];
