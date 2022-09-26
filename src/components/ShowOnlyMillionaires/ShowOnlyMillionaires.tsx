import { useContext } from 'react';
import { UsersContext } from '../../state/context';
import { showOnlyMillionaires } from '../../state/helpers';

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
      <button onClick={handleOnClick}>Show Only Millionaires</button>
    </>
  );
};

export default ShowOnlyMillionaires;
