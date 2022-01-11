import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);
  const totalExpense = expenses
    .map((expense) => expense.cost)
    .reduce((cur, acc) => cur + acc);
  const remaining = budget - totalExpense;

  return (
    <div className="alert alert-success">
      <span className="text-nowrap">Remaining: &euro;{remaining}</span>
    </div>
  );
};

export default Remaining;
