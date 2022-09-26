import { useContext } from 'react';
import { UsersContext } from '../../state/context';
import { StyledMain, Subtitle } from './styles';

const Main = () => {
  const { state } = useContext(UsersContext);
  return (
    <StyledMain id="main">
      <Subtitle>
        <strong>Person</strong> Wealth
      </Subtitle>
      <ul>
        {state.users.map((user, index: number) => (
          <li key={index}>
            {user.name} {user.money}
          </li>
        ))}
      </ul>
    </StyledMain>
  );
};

export default Main;
