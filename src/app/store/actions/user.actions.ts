import { createAction, props } from '@ngrx/store';
import { IUserState } from '../reducers/user.reducer';

export const UPDATE_USER = createAction("[User] Update", props<IUserState>());
export const RESET_USER = createAction("[User] Reset");