import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, RouterModule } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { SortPipe } from '../sort.pipe';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UserService } from '../user.service';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, FormsModule, FilterPipe, SortPipe, NgClass],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any = {};
  searchText: string = '';
  sortKey: string = 'firstName';
  sortAscending: boolean = true;
  order: string = 'ascending';
  
  nightMode: boolean = true; // Track night mode state
  fn:string ='';
  showPassword: boolean = false;

  constructor(private employeeService: EmployeeService, private router: Router, private dialog: MatDialog,private us:UserService,private authService:AuthServiceService) { }

  ngOnInit(): void {
    
    if(! this.authService.isLoggedIn()){
     
      //alert("unauthorized user \n URL manipulation not allowed")
      this.router.navigate(['/']);
    }
    

    this.getEmployees();
    this.fn=this.us.getFirstName();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: "Are you sure you want to delete this employee?" }
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeService.deleteEmployee(id).subscribe(() => {
          this.getEmployees(); // Refresh employee list after deletion
        });
      }
    });
    
  }

  toggleSortOrder() {
    this.sortAscending = !this.sortAscending;
    this.order = this.sortAscending ? 'ascending' : 'descending';
  }

  toggleNightMode() {
    this.nightMode = !this.nightMode;
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
   // New Method to View Vehicle
   viewVehicle(id: number) {
    this.employeeService.getVehicleById(id).subscribe(vehicle => {
      console.log(vehicle);
      alert(`Vehicle Name: ${vehicle.name}`);
      // You can add navigation or modal pop-up here to show detailed vehicle information
    });
  }

}
