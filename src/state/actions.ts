import { User } from "./state";

export enum ActionType {
  AddUser,
  DoubleMoney,
  ShowOnlyMillionaires,
  SortByRichest,
  CalculateWealth,
}

export interface AddUser {
  type: ActionType.AddUser,
  payload: User,
}

export interface DoubleMoney {
  type: ActionType.DoubleMoney,
  payload: User[],
}

export interface ShowOnlyMillionaires {
  type: ActionType.ShowOnlyMillionaires,
  payload: User[],
}

export interface SortByRichest {
  type: ActionType.SortByRichest,
  payload: User[],
}

export type UsersActions = 
  | AddUser 
  | DoubleMoney 
  | ShowOnlyMillionaires 
  | SortByRichest 
