import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActions } from './auth.actions';
import { Student } from 'src/app/students/interfaces/student.interface';

@Injectable()
export class AuthEffects {
  loadAuths$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loadAuth),
      concatMap(() => {
        let identity: Student | string | null | undefined =
          localStorage.getItem('MedievalUni_auth');
        if (!!identity && identity !== 'undefined') {
          identity = JSON.parse(identity as string) as Student;
        } else {
          identity = undefined;
        }
        return of(identity).pipe(
          map((i: Student | undefined) => {
            if (!!i) {
              return AuthActions.loadAuthSuccess({
                loaded: true,
                identity: i,
              });
            } else {
              return AuthActions.loadAuthFailure({ error: 'No identity' });
            }
          }),
          catchError((error: unknown) =>
            of(AuthActions.loadAuthFailure({ error }))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions) {}
}
