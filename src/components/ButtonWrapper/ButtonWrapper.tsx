import {
  AddUser,
  CalculateWealth,
  DoubleMoney,
  ShowOnlyMillionaires,
  SortByRichest,
} from '../Buttons';
import { Aside } from './styles';

const ButtonWrapper = () => {
  return (
    <Aside>
      <AddUser />
      <DoubleMoney />
      <ShowOnlyMillionaires />
      <SortByRichest />
      <CalculateWealth />
    </Aside>
  );
};

export default ButtonWrapper;
