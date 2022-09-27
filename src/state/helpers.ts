import { ActionType, AddUser, CalculateWealth, DoubleMoney, ShowOnlyMillionaires, SortByRichest } from "./actions"
import { User } from "./state"
import { RandomUser, Result } from "./typings/randomUser"

export const getRandomUser = async (): Promise<User> => {
  const res: Response = await fetch('https://randomuser.me/api')
  const data: RandomUser = await res.json()

  const user: Result = data.results[0]

  const newUser: User = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }

  return newUser
}

export const addUser = (user: User): AddUser => ({
  type: ActionType.AddUser,
  payload: user,
})

export const doubleMoney = (users: User[]): DoubleMoney => ({
  type: ActionType.DoubleMoney,
  payload: users,
})

export const sortByRichest = (users: User[]): SortByRichest => ({
  type: ActionType.SortByRichest,
  payload: users,
})

export const showOnlyMillionaires = (users: User[]): ShowOnlyMillionaires => ({
  type: ActionType.ShowOnlyMillionaires,
  payload: users,
})

export const calculateWealth = (totalWealth: number): CalculateWealth => ({
  type: ActionType.CalculateWealth,
  payload: totalWealth,
})
