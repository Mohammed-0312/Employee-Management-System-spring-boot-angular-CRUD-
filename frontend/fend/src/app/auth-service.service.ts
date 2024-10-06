import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() {}

  // Check the login status from localStorage
  isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn'); // Returns true if 'isLoggedIn' exists in localStorage
  }

  // When logging in, store the login status in localStorage
  login() {
    localStorage.setItem('isLoggedIn', 'true'); // Store 'true' in localStorage to persist login state
  }

  // When logging out, remove the login status from localStorage
  logout() {
    localStorage.removeItem('isLoggedIn'); // Clear login state from localStorage
  }
}

/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loggedIn = false; // This should come from actual authentication logic

  constructor() {}

  isLoggedIn(): boolean {
    // Implement your real authentication check logic here
    console.log('User logged in:', this.loggedIn);
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true; // Call this method after successful login
  }

  logout() {
    this.loggedIn = false; // Call this method to log out the user
  }
}
*/