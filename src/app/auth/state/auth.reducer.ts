import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { IAuthState } from '../interfaces/auth.state';

export const authFeatureKey = 'auth';

export const initialState: IAuthState = {
  loaded: false,
};

export const AuthReducer = createReducer(
  initialState,
  on(AuthActions.loadAuth, (state) => {
    return { ...state, loaded: false };
  }),
  on(AuthActions.loadAuthSuccess, (state, authState) => {
    localStorage.setItem(
      'MedievalUni_auth',
      JSON.stringify(authState.identity)
    );
    return { ...state, loaded: true, identity: authState.identity };
  }),
  on(AuthActions.loadAuthFailure, (state, error) => {
    console.error(error);
    localStorage.removeItem('MedievalUni_auth');
    return { ...state, loaded: false, identity: undefined };
  })
);
