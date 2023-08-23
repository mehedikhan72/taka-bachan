import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { db, storage } from "../../firebase/config";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

export interface Expense {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;
  userId: string;
}

interface ExpenseState {
  expenses: Expense[];
}

const initialState: ExpenseState = {
  expenses: [],
};

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (thunkAPI) => {
    const response = await getDocs(collection(db, "expenses"));
    const filteredResponse = response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Expense[];
    return filteredResponse;
  }
);

export const saveExpense = createAsyncThunk(
  "expenses/saveExpense",
  async (expense: Expense, thunkAPI) => {
    const response = await addDoc(collection(db, "expenses"), expense);
    return { ...expense, id: response.id };
  }
);

export const ExpenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      state.expenses = action.payload;
    });
    builder.addCase(saveExpense.fulfilled, (state, action) => {
      state.expenses.push(action.payload);
    });
  },
});

export default ExpenseSlice.reducer;
export const { addExpense } = ExpenseSlice.actions;
