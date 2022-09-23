import { useReducer } from 'react';
import { UsersContext } from '../../state/context';
import { usersReducer } from '../../state/reducer';
import { initialUsersState } from '../../state/state';
import AddUser from '../AddUser';

const Main = () => {
  const [state, dispatch] = useReducer(usersReducer, initialUsersState);
  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      <ul>
        {state.users.map((user, index: number) => (
          <li key={index}>
            {user.name} {user.money}
          </li>
        ))}
      </ul>
      <AddUser />
    </UsersContext.Provider>
  );
};

export default Main;
