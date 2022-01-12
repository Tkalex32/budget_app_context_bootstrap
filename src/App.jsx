import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Budget Tracker</h1>
        <div className="row mt-3">
          <div className="col-12 col-md-4">
            <Budget />
          </div>
          <div className="col-12 col-md-4">
            <Remaining />
          </div>
          <div className="col-12 col-md-4">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
