import { BrowserRouter, Route, Routes, } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Header from "./components/Header/Header";
import ProductsPage from "./components/views/ProductsPage/ProductsPage";
import ProductDetail from "./components/views/ProductDetail/ProductDetail";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/products" element={<ProductsPage />} />
            <Route exact path="/product-detail/productId" element={<ProductDetail />} />
          </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
