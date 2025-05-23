/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Main from "./pages/Main";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { Sheet } from "./pages/Sheet";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/sheet" element={<Sheet />} />
          <Route path="/posts/:slug" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
