import ProductCard from "./Components/ProductCard/ProductCard";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import './App.css'

function App() {
  return (
    <div  className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
