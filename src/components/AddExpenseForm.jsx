const AddExpenseForm = () => {
  return (
    <form>
      <div className="row form-group">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" className="form-control" />
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">Cost</label>
          <input type="text" required id="cost" className="form-control" />
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
