import { ActionType } from "../../action-types/index";

interface AddExpense {
    type: ActionType.ADD_EXPENSE;
    payload: {
        id: string;
        category: string;
        description: string;
        amount: number;
        date: string;
    }
}

interface DeleteExpense {
    type: ActionType.DELETE_EXPENSE;
    payload: string; // since we just need the id
}

interface EditExpense {
    type: ActionType.EDIT_EXPENSE;
    payload: {
        id: string;
        category: string;
        description: string;
        amount: number;
        date: string;
    }
}

export type Action = AddExpense | DeleteExpense | EditExpense;