import { ActionType, UsersActions } from "./actions";
import { UsersState } from "./state";

export function usersReducer(state: UsersState, action: UsersActions): UsersState {
  switch (action.type) {
    case ActionType.AddUser:
      return {
        ...state,
        users: [
          action.payload,
          ...state.users
        ]
      }
    case ActionType.DoubleMoney:
      return {
        ...state,
        users: action.payload 
      }
    case ActionType.SortByRichest:
      return {
        ...state,
        users: action.payload 
      }
    case ActionType.ShowOnlyMillionaires:
      return {
        ...state,
        users: action.payload 
      }
    case ActionType.CalculateWealth:
      return {
        ...state,
        totalWealth: action.payload 
      }
    default:
      return state
  }
}
