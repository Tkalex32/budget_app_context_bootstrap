import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ expense }) => {
  const { name, cost } = expense;
  const { dispatch } = useContext(AppContext);

  const deleteHandler = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: expense.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary mr-3">&euro; {cost}</span>
        <TiDelete size="1.25em" role="button" onClick={deleteHandler} />
      </div>
    </li>
  );
};

export default ExpenseItem;
