import { User } from '../../state/state';
import { PersonWrapper } from './styles';

interface PersonProps {
  props: User;
}

const formatMoney = (money: number): string => {
  return '$' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const Person: React.FC<PersonProps> = ({ props }) => {
  const { money, name } = props;
  const formattedMoney = formatMoney(money);

  return (
    <PersonWrapper>
      <strong>{name}</strong> {formattedMoney}
    </PersonWrapper>
  );
};

export default Person;
