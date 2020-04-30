import { ADD_INCOME, ADD_EXPENSE, REMOVE_TRANSACTION } from '../components/constants';

const handleAddExpense = (state, action) => ({
  ...state,
  expenses: [...state.expenses, action.payload],
});
const handleAddIncome = (state, action) => ({
  ...state,
  incomes: [...state.incomes, action.payload],
});

const handleRemoveTransaction = (state, action) => {
  const { budgetType, payload } = action;
  if (budgetType === '+')
    return {
      ...state,
      incomes: state.incomes.filter(({ transactionId }) => transactionId !== payload),
    };
  return {
    ...state,
    expenses: state.expenses.filter(({ transactionId }) => transactionId !== payload),
  };
};

const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return handleAddIncome(state, action);
    case ADD_EXPENSE:
      return handleAddExpense(state, action);
    case REMOVE_TRANSACTION:
      return handleRemoveTransaction(state, action);
    default:
  }
};
export default appReducer;
