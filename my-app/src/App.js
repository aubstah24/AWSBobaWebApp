//import logo from './logo.svg';
import './App.css';
import {AboutUsPage} from "./Pages/AboutUsPage";
import {LandingPage} from "./Pages/LandingPage";
import {MenuPage} from "./Pages/MenuPage";
import {OnlineOrderingPage} from "./Pages/OnlineOrderingPage";
import Navbar from "./Navbar";
import {Route , Routes} from "react-router-dom";

function App() {

  return (
      <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/menu" element={<MenuPage/>}></Route>
        <Route path="/order" element={<OnlineOrderingPage/>}></Route>
        <Route path="/about" element={<AboutUsPage/>}></Route>
      </Routes>
    </div>
      </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
