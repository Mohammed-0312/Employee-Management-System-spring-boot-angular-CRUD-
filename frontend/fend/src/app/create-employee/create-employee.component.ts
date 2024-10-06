import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import Notiflix from 'notiflix';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],  // Include FormsModule here
  
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']  // Fixed typo from styleUrl to styleUrls
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  
  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void { }

  saveEmployee() {                 //send data ↓
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data); // print data to console
      this.goToEmployeeList();// navigate back to employee list component
    }, error => console.log(error));// log error if any
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
  
  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
    Notiflix.Notify.success('Added successful!');
    //this.tst.success("Saved")
  }
}
