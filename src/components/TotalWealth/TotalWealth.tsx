import { useContext } from 'react';
import { UsersContext } from '../../state/context';

const formatMoney = (money: number): string => {
  return '$' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const TotalWealth = () => {
  const { state } = useContext(UsersContext);
  const { totalWealth } = state;
  const formattedMoney = formatMoney(totalWealth);

  return (
    <>
      <h3>
        Total Wealth: <strong>{formattedMoney}</strong>
      </h3>
    </>
  );
};

export default TotalWealth;
