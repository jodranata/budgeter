import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { ADD_INCOME, ADD_EXPENSE, REMOVE_TRANSACTION } from '../components/constants';
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

  const removeTransactionAction = (budgetType, id) => {
    return dispatch({ type: REMOVE_TRANSACTION, budgetType, payload: id });
  };

  return (
    <Provider
      value={{
        state,
        addExpenseActions,
        addIncomeActions,

        removeTransactionAction,
      }}
    >
      {children}
    </Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object),
};

GlobalProvider.defaultProps = {
  children: {},
};
