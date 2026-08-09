/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import Post from "./pages/Post";
import { Fleet } from "./pages/Fleet";
import { Career } from "./pages/Career";
import { CareerProductEngineer } from "./pages/CareerProductEngineer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/career" element={<Career />} />
          <Route
            path="/career/product-engineer"
            element={<CareerProductEngineer />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
