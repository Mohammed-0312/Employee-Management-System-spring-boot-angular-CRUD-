import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service'; // Import your service
import { Employee } from '../employee'; // Adjust the path as necessary
import { UserService } from '../user.service';
import { AuthServiceService } from '../auth-service.service';
import { AboutProjectComponent } from "./about-project/about-project.component";
import Notiflix from 'notiflix';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, AboutProjectComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {
  userName: string = '';
  password: string = '';
  chances: number = 2;
  employees: Employee[] = []; // To store employee data

  constructor(private router: Router, private employeeService: EmployeeService,private userService: UserService,private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.fetchEmployees(); // Fetch the list of employees on component initialization
  }

  fetchEmployees() {
    this.employeeService.getEmployeesList1().subscribe(data => {
      this.employees = data; // Assign the fetched data to the employees array
    });
  }

  login() {
    const matchedEmployee = this.employees.find(employee => 
      employee.emailId === this.userName && employee.firstName === this.password
    );

    if (matchedEmployee) {
      
      this.authService.login();
      //alert("step1 done");
      Notiflix.Notify.success('Login successfull');


      this.userService.setFirstName(this.password);
      
      this.router.navigate(['/employees']);
    } else {
      
      this.resetFormFields();
      //alert("Invalid user, attempts remaining: " + this.chances--);
      Notiflix.Notify.failure('invalid credentials try again');
    }
  }
  private resetFormFields() {
    this.userName = ''; // Clear the username field
    this.password = ''; // Clear the password field
  }
}
