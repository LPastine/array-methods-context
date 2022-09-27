import { useContext } from 'react';
import { UsersContext } from '../../state/context';
import Person from '../Person';
import TotalWealth from '../TotalWealth';
import { StyledMain, Subtitle } from './styles';

const Main = () => {
  const { state } = useContext(UsersContext);
  return (
    <StyledMain id="main">
      <Subtitle>
        <strong>Person</strong> Wealth
      </Subtitle>
      <div id="users">
        {state.users.map((user) => (
          <Person props={user} />
        ))}
      </div>
      <div id="totalWeatlh">
        <TotalWealth />
      </div>
    </StyledMain>
  );
};

export default Main;
