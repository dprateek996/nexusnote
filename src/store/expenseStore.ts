import { create } from 'zustand';
import { nanoid } from 'nanoid';

export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: 'Work' | 'Personal' | 'Utilities' | 'Other';
  date: string;
};

type ExpenseState = {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, 'id' | 'date'>) => void;
};

// Create the store with some initial data for demonstration
export const useExpenseStore = create<ExpenseState>((set) => ({
  expenses: [
    { id: '1', title: 'Client Lunch', amount: 45.50, category: 'Work', date: new Date().toISOString() },
    { id: '2', title: 'Monthly Subscription', amount: 14.99, category: 'Utilities', date: new Date().toISOString() },
    { id: '3', title: 'Office Supplies', amount: 120.00, category: 'Work', date: new Date().toISOString() },
  ],
  addExpense: (expense) => set((state) => ({
    expenses: [{ ...expense, id: nanoid(), date: new Date().toISOString() }, ...state.expenses],
  })),
}));