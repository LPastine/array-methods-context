import { createContext, Dispatch } from "react"
import { UsersActions } from "./actions"
import { initialUsersState, UsersState } from "./state"

export const UsersContext = createContext<{
  state: UsersState,
  dispatch: Dispatch<UsersActions>
}>({
  state: initialUsersState,
  dispatch: () => undefined,
})
