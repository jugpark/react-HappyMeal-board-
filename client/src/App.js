import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Board from "./pages/BoardPage/BoardPage";
import BoardWrite from "./pages/BoardWritePage/BoardWritePage";
import BoardDetail from "./components/Board/BoardDetail";
import MyPage from "./pages/ProfilePage/ProfilePage";
import Auth from "./hoc/auth";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)}></Route>
        <Route exact path="/login" component={Auth(LoginPage, null)}></Route>
        <Route path="/register" component={Auth(RegisterPage, null)} />
        <Route path="/board" component={Auth(Board, null)} />
        <Route path="/boardwrite" component={Auth(BoardWrite, null)} />
        <Route path="/board/:boardId" component={Auth(BoardDetail, null)} />
        <Route path="/profile" component={Auth(MyPage, null)} />
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
