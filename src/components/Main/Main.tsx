import { useContext } from 'react';
import { UsersContext } from '../../state/context';

const Main = () => {
  const { state } = useContext(UsersContext);
  return (
    <>
      <ul>
        {state.users.map((user, index: number) => (
          <li key={index}>
            {user.name} {user.money}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;
