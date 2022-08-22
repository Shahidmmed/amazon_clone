import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
