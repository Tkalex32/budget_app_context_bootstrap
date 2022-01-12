import { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((item) => item.id !== action.payload),
      };
    case "EDIT_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "shopping", cost: 50 },
    { id: 2, name: "holiday", cost: 200 },
    { id: 3, name: "shopping", cost: 40 },
  ],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 5. Returns our context. Pass in the values we want to expose
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
