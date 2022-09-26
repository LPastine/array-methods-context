import { useContext } from 'react';
import { UsersContext } from '../../state/context';
import { doubleMoney } from '../../state/helpers';

const DoubleMoney = () => {
  const { state, dispatch } = useContext(UsersContext);

  const doubledMoneyUsers = state.users.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  const handleOnClick = () => {
    dispatch(doubleMoney(doubledMoneyUsers));
  };
  return (
    <>
      <button onClick={handleOnClick}>Double Money</button>
    </>
  );
};

export default DoubleMoney;
