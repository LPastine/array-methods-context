import { useContext } from 'react';
import { UsersContext } from '../../../state/context';
import { addUser, getRandomUser } from '../../../state/helpers';
import { User } from '../../../state/state';
import { Button } from '../styles';

const AddUser = () => {
  const { dispatch } = useContext(UsersContext);

  const handleOnClick = async () => {
    const newUser: User = await getRandomUser();
    dispatch(addUser(newUser));
  };
  return (
    <>
      <Button onClick={handleOnClick}>Add New User</Button>
    </>
  );
};

export default AddUser;
