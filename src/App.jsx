import { useReducer } from "react";
import { ProductList } from "./components/ProductList";
import { initialState, reducer, BookContext } from "./context";
import { Basket } from "./components/Basket";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="row">
      <BookContext.Provider value={{ state, dispatch }}>
        <ProductList />
        <ToastContainer />
        <Basket />
      </BookContext.Provider>
    </div>
  );
}

export default App;
