export interface UsersState {
  users: User[],
}

export interface User {
  name: string,
  money: number,
}

export const initialUsersState: UsersState = {
  users: [
    {
      name: 'Test1',
      money: 1000000
    },
    {
      name: 'Test2',
      money: 2000000
    },
    {
      name: 'Test3',
      money: 3000000
    },
  ],
}
