import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IAuthState } from '../interfaces/auth.state';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Load Auth': emptyProps(),
    'Load Auth Success': props<IAuthState>(),
    'Load Auth Failure': props<{ error: unknown }>(),
  },
});
