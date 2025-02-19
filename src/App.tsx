/** @jsxImportSource @emotion/react */
import { Home } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Main from "./pages/Main";
import { About } from "./pages/About";
import { Product } from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
