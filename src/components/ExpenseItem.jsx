import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AiFillDelete } from "react-icons/ai";

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
      <div className="right">
        <span className="badge badge-primary mr-3">&euro; {cost}</span>
        <AiFillDelete size="1.25em" role="button" onClick={deleteHandler} />
      </div>
    </li>
  );
};

export default ExpenseItem;
