/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import Post from "./pages/Post";
import { Fleet } from "./pages/Fleet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="/fleet" element={<Fleet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
