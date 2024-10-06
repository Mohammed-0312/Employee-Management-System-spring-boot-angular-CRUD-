import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 

  private baseURL = "http://localhost:8080/api/v1/employees";
  private vehicleBaseURL = "http://localhost:8080/api/v1/vehicles";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(){
    return this.httpClient.get('http://localhost:8080/api/v1/employees');
  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // Method to get the list of employees
  getEmployeesList1(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  //new
  // Method to get Vehicle by id
  getVehicleById(id: number): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(`${this.vehicleBaseURL}/${id}`);
  }

  createVehicle(vehicle: Vehicle): Observable<Object> {
    return this.httpClient.post(`${this.vehicleBaseURL}`, vehicle);
  }

  
}
