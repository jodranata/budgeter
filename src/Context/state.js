import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

const INITIAL_STATE = {
  incomes: [],
  expenses: [],
};

export const GlobalContext = createContext(INITIAL_STATE);
const { Provider } = GlobalContext;
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const addExpenseActions = data => {};
  const removeIncomeAction = data => {};
  const removeExpenseAction = data => {};
  return (
    <Provider
      value={{
        state,
      }}
    >
      {children}
    </Provider>
  );
};
