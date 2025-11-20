"use client";
import { useExpenseStore } from "@/store/expenseStore";
import { BarChart } from "lucide-react";


const ExpenseTrackerWidget = () => {
  const { expenses } = useExpenseStore();
  const recentExpenses = expenses.slice(0, 3); // Show the 3 most recent expenses

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <BarChart size={18} className="text-slate-500" />
        <h3 className="font-semibold text-slate-800">Recent Expenses</h3>
      </div>
      <div className="mt-4 space-y-3">
        {recentExpenses.map((expense) => (
          <div key={expense.id} className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">{expense.title}</span>
            <span className="text-sm font-semibold text-slate-800">${expense.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
       <button className="mt-4 w-full text-sm font-semibold text-primary hover:text-rose-600 transition-colors">
        View All
      </button>
    </div>
  );
};

export default ExpenseTrackerWidget;