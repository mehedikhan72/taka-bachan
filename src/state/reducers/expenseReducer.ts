import { ActionType } from "../action-types";
import { Action } from "../actions/expense";

interface Expense {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;
}

interface ExpensesState {
  expense: Expense | null;
}

const initialState: ExpensesState = {
  expense: null,
};

const expenseReducer = (state: ExpensesState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_EXPENSE:
      return {
        ...state,
        expense: action.payload,
      };
    case ActionType.EDIT_EXPENSE:
      return {
        ...state,
        expense: action.payload,
      };
    case ActionType.DELETE_EXPENSE:
      return {
        ...state,
        expense: null,
      };
    default:
      return state;
  }
};

export default expenseReducer;
