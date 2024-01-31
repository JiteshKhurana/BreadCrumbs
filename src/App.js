import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import BreadCrumbs from "./components/BreadCrumbs";

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-4xl font-bold my-4 text-center">
        Jitesh Khurana Store
      </h1>
      <BreadCrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
