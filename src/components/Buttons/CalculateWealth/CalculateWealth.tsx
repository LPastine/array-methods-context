import { useContext } from 'react';
import { UsersContext } from '../../../state/context';
import { calculateWealth } from '../../../state/helpers';
import { Button } from '../styles';

const CalculateWealth = () => {
  const { state, dispatch } = useContext(UsersContext);

  const totalWealth: number = state.users.reduce(
    (acc, user) => (acc += user.money),
    0
  );

  const handleOnClick = () => {
    dispatch(calculateWealth(totalWealth));
  };
  return (
    <>
      <Button onClick={handleOnClick}>Calculate Wealth</Button>
    </>
  );
};

export default CalculateWealth;
