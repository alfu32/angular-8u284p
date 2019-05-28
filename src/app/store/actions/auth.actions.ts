import { Action } from '@ngrx/store';
 
export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuths = '[Auth] Set Auths'
}
 
export class Auth implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}
 
export type AuthActions = AuthActionTypes;