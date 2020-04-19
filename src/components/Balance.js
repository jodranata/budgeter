import React from 'react';
import { BUDGETTYPE } from './constants';

const budgets = BUDGETTYPE.map(({ type, op }) => (
  <div className={`${type}Sum`}>
    <span className={`budgetText ${type}Text`}>{`Your ${type}`}</span>
    <span className={`budgetNominal ${type}Nominal`}>
      <span id={type}>{`${op}0.00`}</span>
    </span>
  </div>
));

const Balance = () => {
  return (
    <div>
      <h1 className="appTitle">Budget App</h1>
      <div className="balanceContainer">
        <span className="balanceText">Your Balance</span>
        <span className="balanceNumber" />
      </div>
      <div className="budgetDetail">{budgets}</div>
    </div>
  );
};

export default Balance;
