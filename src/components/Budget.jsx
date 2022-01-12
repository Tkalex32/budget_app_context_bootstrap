import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const [editBudget, setEditBudget] = useState(false);
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const newBudgetHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_BUDGET",
      payload: newBudget,
    });
    setEditBudget(false);
  };

  return (
    <>
      {editBudget ? (
        <form
          className="alert alert-primary d-flex justify-content-between align-items-center"
          style={{ height: "64px" }}
          onSubmit={newBudgetHandler}
        >
          <input
            type="text"
            className="form-control"
            placeholder="New budget"
            value={newBudget}
            onChange={(event) => setNewBudget(event.target.value)}
            required
          ></input>
          <button className="btn btn-primary">Save</button>
        </form>
      ) : (
        <div className="alert alert-primary d-flex justify-content-between align-items-center">
          <span className="text-nowrap">Budget: &euro; {budget}</span>
          <button
            className="btn btn-outline-primary"
            onClick={() => setEditBudget(true)}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
};

export default Budget;
