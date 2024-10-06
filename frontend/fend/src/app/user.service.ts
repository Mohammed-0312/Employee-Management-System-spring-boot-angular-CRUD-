import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private firstName: string = '';

  constructor() {
    // Optionally, initialize firstName from localStorage if needed
    this.firstName = localStorage.getItem('fn') || ''; // Initialize from localStorage if available
  }

  // Method to set the first name and save it in localStorage
  setFirstName(name: string) {
    this.firstName = name;
    localStorage.setItem('fn', this.firstName); // Save the first name in localStorage
  }

  // Method to get the first name from localStorage
  getFirstName(): string {
    return localStorage.getItem('fn') || ''; // Retrieve the first name from localStorage
  }
}
