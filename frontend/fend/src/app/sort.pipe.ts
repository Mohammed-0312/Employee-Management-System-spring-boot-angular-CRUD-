
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(employees: any[], sortKey: string, ascending: boolean = true): any[] {
    if (!employees || !sortKey) {
      return employees;
    }

    // Sorting logic based on the key and order (ascending or descending)
    const sortedEmployees = employees.sort((a, b) => {
      const aValue = a[sortKey].toLowerCase();
      const bValue = b[sortKey].toLowerCase();
      
      if (aValue < bValue) {
        return ascending ? -1 : 1;
      }
      if (aValue > bValue) {
        return ascending ? 1 : -1;
      }
      return 0;
    });

    return sortedEmployees;
  }
}
