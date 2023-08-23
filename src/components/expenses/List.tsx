import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { fetchExpenses } from "../../store/features/expenseSlice";

export default function List() {
  const expenses = useAppSelector((state) => state.expenses.expenses);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);
  return (
    <div>
      <h1>Expenses</h1>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <p>{expense.category}</p>
          <p>{expense.description}</p>
          <p>{expense.amount}</p>
          <p>{expense.date}</p>
          <p>{expense.userId}</p>
        </div>
      ))}
    </div>
  );
}
