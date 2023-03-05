import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/cart";
import Main from "./components/main/main";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
