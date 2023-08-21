import { Dispatch } from "redux";
import { ActionType } from "../../action-types/index";
import { Action } from "../../actions/expense/index";

interface Expense {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;
}

export const addExpense = (expense: Expense) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_EXPENSE,
      payload: expense,
    });
  };
};

export const deleteExpense = (id: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
        type: ActionType.DELETE_EXPENSE,
        payload: id,
        });
    };
}

export const editExpense = (expense: Expense) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
        type: ActionType.EDIT_EXPENSE,
        payload: expense,
        });
    };
}
