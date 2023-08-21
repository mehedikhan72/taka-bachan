import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { expenseActionCreators } from "../../state";
import { RootState } from "../../state/reducers";

export default function Expenses() {
  const expenseDemo = {
    id: "1",
    category: "Food",
    description: "Groceries",
    amount: 100,
    date: "2021-01-01",
  };

  const state = useSelector((state: RootState) => state.expense);
  const dispatch = useDispatch();

  const { addExpense, deleteExpense, editExpense } = bindActionCreators(
    expenseActionCreators,
    dispatch
  );

  return (
    <div>
      <h1>{state.expense?.id}</h1>
      <h1>{state.expense?.category}</h1>
      <h1>{state.expense?.description}</h1>
      <h1>{state.expense?.amount}</h1>
      <h1>{state.expense?.date}</h1>
      <button onClick={() => addExpense(expenseDemo)}>Add Expense</button>
      <button onClick={() => deleteExpense("1")}>Delete Expense</button>
      <button onClick={() => editExpense(expenseDemo)}>Edit Expense</button>
    </div>
  );
}
