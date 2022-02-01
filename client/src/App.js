import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import ProductsPage from "./views/ProductsPage/ProductsPage";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/products" element={<ProductsPage />} />
            <Route
              exact
              path="/product-detail/productId"
              element={<ProductDetail />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
