import {
  ADD_INCOME,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  REMOVE_INCOME,
} from '../components/constants';

const handleAddExpense = (state, action) => ({
  ...state,
  expense: action.payload,
});
const handleAddIncome = (state, action) => ({
  ...state,
  income: action.payload,
});

const handleRemoveTransaction = (state, action) => {};

const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return handleAddExpense(state, action);
    case ADD_EXPENSE:
      return handleAddIncome(state, action);
    case REMOVE_EXPENSE:
    case REMOVE_INCOME:
      return handleRemoveTransaction(state, action);
    default:
  }
};
export default appReducer;
