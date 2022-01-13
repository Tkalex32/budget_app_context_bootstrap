import ExpenseItem from "./ExpenseItem";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundExpenses, setFoundExpenses] = useState(expenses);

  const searchExpenses = () => {
    const foundList = expenses.filter((expense) =>
      expense.name.includes(searchTerm)
    );
    setFoundExpenses(foundList);
  };

  useEffect(() => {
    searchExpenses();
  }, [searchTerm]);

  return (
    <div>
      <div className="col-12 col-lg-4">
        <form className="d-flex justify-content-between align-items-center mb-3">
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            placeholder="Type to search..."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
        <div className="col-6 col-lg-8"></div>
      </div>
      <ul className="list-group">
        {foundExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
