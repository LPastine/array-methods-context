import { useContext } from 'react';
import { UsersContext } from '../../../state/context';
import { showOnlyMillionaires } from '../../../state/helpers';
import { Button } from '../styles';

const ShowOnlyMillionaires = () => {
  const { state, dispatch } = useContext(UsersContext);

  const filteredByMillionaires = state.users.filter(
    (user) => user.money > 1000000
  );

  const handleOnClick = () => {
    dispatch(showOnlyMillionaires(filteredByMillionaires));
  };
  return (
    <>
      <Button onClick={handleOnClick}>Show Only Millionaires</Button>
    </>
  );
};

export default ShowOnlyMillionaires;
