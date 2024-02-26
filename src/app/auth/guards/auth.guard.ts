import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { identityLoadedSelector } from 'src/app/auth/state/auth.selectors';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authStore = inject(Store);
  let autorizado = false;
  await authStore.select(identityLoadedSelector).subscribe({
    next: (l: boolean) => {
      autorizado = l;
    },
  });
  if (autorizado) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
