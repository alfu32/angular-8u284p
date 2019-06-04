import * as fromAuth from './auth.reducer';
 
export interface State {
  auth: fromAuth.State;
}

export { counterReducer } from './counter.reducer';