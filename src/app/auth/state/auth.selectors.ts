import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { IAuthState } from '../interfaces/auth.state';

export const selectAuthState = (state: AppState): IAuthState => state.auth;
export const identityLoadedSelector = createSelector(
  selectAuthState,
  (state: IAuthState): boolean => state.loaded
);
export const identitySelector = createSelector(
  selectAuthState,
  (state: IAuthState): IAuthState['identity'] => state.identity
);
