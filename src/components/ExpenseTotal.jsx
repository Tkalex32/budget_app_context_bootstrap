import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalExpense = expenses
    .map((expense) => expense.cost)
    .reduce((cur, acc) => cur + acc);

  return (
    <div className="alert alert-info">
      <span className="text-nowrap">Spent: &euro;{totalExpense}</span>
    </div>
  );
};

export default ExpenseTotal;
