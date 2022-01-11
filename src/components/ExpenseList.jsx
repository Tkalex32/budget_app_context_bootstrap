import ExpenseItem from "./ExpenseItem";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
