import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../users/shared/user';
import { RESET_USER, UPDATE_USER } from '../actions/user.actions';

export interface IUserState {
    user: User;
}

const initialUser = {
    companyName: "",
    email: "",
    fullName: "",
    numberOfUsers: 0,
    password: "",
    segment: "",
    telephone: ""
};

let localUser = localStorage.getItem("userState");

export const initialState: IUserState = {
    user: typeof localUser === "string" ? { ...JSON.parse(localUser).user } : initialUser
};

const _userReducer = createReducer(
    initialState,
    on(UPDATE_USER, (state, action) => action),
    on(RESET_USER, (state) => initialState)
);

export function userReducer(state: IUserState = initialState, action: Action) {
    return _userReducer(state, action);
}