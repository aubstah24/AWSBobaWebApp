import './App.css';
import {AboutUsPage} from "./Pages/AboutUsPage";
import {LandingPage} from "./Pages/LandingPage";
import {MenuPage} from "./Pages/MenuPage";
import {OnlineOrderingPage} from "./Pages/OnlineOrderingPage";
import Nav from "./Navbar";
import {Route , Routes} from "react-router-dom";
import Footer from "./Footer";
import 'semantic-ui-css/semantic.min.css';
import { Divider, Button } from "semantic-ui-react";
import {LocationPage} from "./Pages/LocationPage";
import TopMenu from "./TopMenu";
import {CartPage} from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";


function App() {

  return (
      <>
        <TopMenu/>
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/menu" element={<MenuPage/>}></Route>
            <Route path="/order" element={<OnlineOrderingPage/>}></Route>
            <Route path="/about" element={<AboutUsPage/>}></Route>
            <Route path="/location" element={<LocationPage/>}></Route>
            <Route path="/account" element={<LoginPage/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
          </Routes>
        </div>
          <Divider/>
        <Footer/>
      </>

  );
}

export default App;
