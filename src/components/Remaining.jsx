import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce(
    (total, item) => (total = total + item.cost),
    0
  );
  const remaining = budget - totalExpenses;

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div
      className={`alert ${alertType} d-flex align-items-center`}
      style={{ height: "64px" }}
    >
      <span className="text-nowrap">Remaining: &euro; {remaining}</span>
    </div>
  );
};

export default Remaining;
