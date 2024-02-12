import './App.css';
import {AboutUsPage} from "./Pages/AboutUsPage";
import {LandingPage} from "./Pages/LandingPage";
import {MenuPage} from "./Pages/MenuPage";
import {OnlineOrderingPage} from "./Pages/OnlineOrderingPage";
import Nav from "./Navbar";
import {Route , Routes} from "react-router-dom";
import Footer from "./Footer";
import 'semantic-ui-css/semantic.min.css';
import {Divider} from "semantic-ui-react";


function App() {

  return (
      <>
        <Nav/>
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/menu" element={<MenuPage/>}></Route>
            <Route path="/order" element={<OnlineOrderingPage/>}></Route>
            <Route path="/about" element={<AboutUsPage/>}></Route>
          </Routes>
        </div>
          <Divider/>
        <Footer/>
      </>

  );
}

export default App;
