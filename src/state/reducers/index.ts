import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer";

const reducers = combineReducers({
  expense: expenseReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;