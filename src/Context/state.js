import React, { createContext, useReducer } from 'react';
import {
  ADD_INCOME,
  ADD_EXPENSE,
  REMOVE_INCOME,
  REMOVE_EXPENSE,
} from '../components/constants';
import appReducer from './appReducer';

const INITIAL_STATE = {
  incomes: [],
  expenses: [],
};

export const GlobalContext = createContext(INITIAL_STATE);
const { Provider } = GlobalContext;

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const addExpenseActions = data => {
    return dispatch({ type: ADD_EXPENSE, payload: data });
  };
  const addIncomeActions = data => {
    return dispatch({ type: ADD_INCOME, payload: data });
  };
  const removeIncomeAction = data => {
    return dispatch({ type: REMOVE_INCOME, payload: data });
  };
  const removeExpenseAction = data => {
    return dispatch({ type: REMOVE_EXPENSE, payload: data });
  };

  return (
    <Provider
      value={{
        state,
        addExpenseActions,
        addIncomeActions,
        removeExpenseAction,
        removeIncomeAction,
      }}
    >
      {children}
    </Provider>
  );
};
