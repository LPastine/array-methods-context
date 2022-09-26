import { useReducer } from 'react';
import './App.css';
import {
  AppWrapper,
  ButtonWrapper,
  Container,
  Main,
  Title,
} from './components';
import { UsersContext } from './state/context';
import { usersReducer } from './state/reducer';
import { initialUsersState } from './state/state';

function App() {
  const [state, dispatch] = useReducer(usersReducer, initialUsersState);
  return (
    <div className="App">
      <UsersContext.Provider value={{ state, dispatch }}>
        <AppWrapper>
          <Title />
          <Container>
            <ButtonWrapper />
            <Main />
          </Container>
        </AppWrapper>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
