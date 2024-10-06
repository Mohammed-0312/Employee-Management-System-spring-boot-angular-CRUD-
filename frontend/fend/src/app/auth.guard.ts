import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service'; // Import your AuthService

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService); // Inject AuthService
  const router = inject(Router); // Inject Router to perform redirection

  if (authService.isLoggedIn()) {
    return true; // Allow access if the user is logged in
  } else {
    router.navigate(['/login']); // Redirect to the login page if not authenticated
    return false; // Deny access
  }
};
