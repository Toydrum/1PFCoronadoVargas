import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { identitySelector } from '../state/auth.selectors';
import { Student } from 'src/app/students/interfaces/student.interface';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authStore = inject(Store);
  return authStore.select(identitySelector).pipe(
    map((user: Student | undefined): boolean => {
      console.log(user);
      if (user && user.role === 'admin') {
        return true;
      } else {
        alert('No autorizado');
        router.navigate(['/auth/login']);
        return false;
      }
    })
  );
};
