import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('inició guard')
  const router = inject(Router)
  const authService = inject(AuthService)
  return /* !!authService.authStudent; */true
};
