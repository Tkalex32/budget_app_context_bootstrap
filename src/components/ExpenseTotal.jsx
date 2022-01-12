import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce(
    (total, item) => (total = total + item.cost),
    0
  );

  return (
    <div className="alert alert-info">
      <span className="text-nowrap">Spent: &euro; {totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
