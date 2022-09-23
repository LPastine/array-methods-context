import { useContext } from 'react';
import { UsersContext } from '../../state/context';
import { addUser, getRandomUser } from '../../state/helpers';
import { User } from '../../state/state';

const AddUser = () => {
  const { dispatch } = useContext(UsersContext);

  const handleOnClick = async () => {
    const newUser: User = await getRandomUser();
    dispatch(addUser(newUser));
  };
  return (
    <>
      <button onClick={handleOnClick}>Add New User</button>
    </>
  );
};

export default AddUser;
