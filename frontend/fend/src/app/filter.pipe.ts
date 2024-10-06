import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(employees: any[], searchText: string): any[]//function returns all emplotees if string is null
  {                                                     //returns null if no 
    if (!employees || !searchText) {
      return employees;
    }
    return employees.filter(employee =>
      employee.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.emailId.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
