import { TiDelete } from "react-icons/ti";

const ExpenseItem = ({ expense }) => {
  const { id, name, cost } = expense;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary mr-3">{cost}</span>
        <TiDelete size="1.25em" />
      </div>
    </li>
  );
};

export default ExpenseItem;
