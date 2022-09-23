export interface UsersState {
  users: User[],
}

export interface User {
  name: string,
  money: number,
}

export const initialUsersState: UsersState = {
  users: [],
}
