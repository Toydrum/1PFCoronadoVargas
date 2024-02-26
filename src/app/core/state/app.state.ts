import { ActionReducerMap } from '@ngrx/store';
import { IAuthState } from 'src/app/auth/interfaces/auth.state';
import { AuthReducer } from 'src/app/auth/state/auth.reducer';
export interface AppState {
  auth: IAuthState;
}
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: AuthReducer,
};
