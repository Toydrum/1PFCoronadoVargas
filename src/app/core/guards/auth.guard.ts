import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, firstValueFrom, from } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';


export const authGuard:  CanActivateFn = async (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)
  const autorizado = await firstValueFrom(from(authService.authStudent$))
  if (autorizado) {
    console.log(autorizado);
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }

  }
