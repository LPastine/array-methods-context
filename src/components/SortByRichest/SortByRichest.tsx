import { useContext } from 'react';
import { UsersContext } from '../../state/context';
import { sortByRichest } from '../../state/helpers';

const SortByRichest = () => {
  const { state, dispatch } = useContext(UsersContext);

  const sortedByRichestUsers = state.users.sort((a, b) => b.money - a.money);

  const handleOnClick = () => {
    dispatch(sortByRichest(sortedByRichestUsers));
  };
  return (
    <>
      <button onClick={handleOnClick}>Sort By Richest</button>
    </>
  );
};

export default SortByRichest;
