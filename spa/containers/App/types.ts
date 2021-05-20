export interface IProps {}

export interface IState {}

export interface IAppState {
  users: Array<IUserObject>;
  isLoading: boolean;
}

export const APP_FETCH_USERS = 'APP/FETCH_USERS';
export const APP_FETCH_USERS_SUCCUSS = 'APP/FETCH_USERS_SUCCUESS';
export const APP_FETCH_USERS_FAILURE = 'APP/FETCH_USERS_FAILURE';

interface IUserObject {
  id: string;
  name: string;
  age: string;
}

interface IFetchUsers {
  type: typeof APP_FETCH_USERS;
}

interface IFetchUsersSuccess {
  type: typeof APP_FETCH_USERS_SUCCUSS;
  payload: {
    users: Array<IUserObject>;
  };
}

interface IFetchUsersFailure {
  type: typeof APP_FETCH_USERS_FAILURE;
  payload: {
    error: string;
  };
}

export type TypesAction = IFetchUsers | IFetchUsersSuccess | IFetchUsersFailure;
