import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import ProductsPage from "./views/ProductsPage/ProductsPage";
import Footer from "./components/Footer/Footer";
// import ProfilePage from "./views/ProfilePage/ProfilePage";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
        <BrowserRouter>
          <Header />
          <main>
            <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, null)} />
            <Route exact path="/register" component={Auth(RegisterPage, null)} />
            <Route exact path="/products" component={Auth(ProductsPage, null)} />
              {/* <Route exact path="/profile" element={<ProfilePage />} /> */}
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
    </div>
  );
};
export default App;
