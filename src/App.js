import "./App.css";
import { ToastContainer } from "react-toastify";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <>
      <ProductList />
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
