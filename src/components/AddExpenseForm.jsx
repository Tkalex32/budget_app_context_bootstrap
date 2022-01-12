import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row form-group">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            required
            id="cost"
            className="form-control"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
