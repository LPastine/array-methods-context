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
        users: action.payload 
      }
    case ActionType.SortByRichest:
      return {
        users: action.payload 
      }
    case ActionType.ShowOnlyMillionaires:
      return {
        users: action.payload 
      }
    default:
      return state
  }
}
