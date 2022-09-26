import { useContext } from 'react';
import { UsersContext } from '../../../state/context';
import { doubleMoney } from '../../../state/helpers';
import { Button } from '../styles';

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
      <Button onClick={handleOnClick}>Double Money</Button>
    </>
  );
};

export default DoubleMoney;
