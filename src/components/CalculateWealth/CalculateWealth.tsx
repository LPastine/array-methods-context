import { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../../state/context';

const formatMoney = (money: number): string => {
  return '$' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const CalculateWealth = () => {
  const { state } = useContext(UsersContext);
  const [display, setDisplay] = useState(false);
  const [wealth, setWealth] = useState('');

  useEffect(() => {
    const totalWealth: number = state.users.reduce(
      (acc, user) => (acc += user.money),
      0
    );

    const formattedWealth: string = formatMoney(totalWealth);

    setWealth(formattedWealth);
  }, [state]);

  const handleOnClick = () => {
    setDisplay(true);
  };
  return (
    <>
      <button onClick={handleOnClick}>Calculate Wealth</button>
      {display && (
        <h3>
          Total Wealth: <strong>{wealth}</strong>
        </h3>
      )}
    </>
  );
};

export default CalculateWealth;
