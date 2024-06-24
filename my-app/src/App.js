import './App.css';
import {AboutUsPage} from "./Pages/AboutUsPage";
import {LandingPage} from "./Pages/LandingPage";
import {MenuPage} from "./Pages/MenuPage";
import {OnlineOrderingPage} from "./Ordering/OnlineOrderingPage";
import {Route , Routes} from "react-router-dom";
import Footer from "./Footer";
import 'semantic-ui-css/semantic.min.css';
import { Divider } from "semantic-ui-react";
import {LocationPage} from "./Pages/LocationPage";
import TopMenu from "./TopMenu";
import {CartPage} from "./Cart/CartPage";
import {LoginPage} from "./authentication/LoginPage";
import {ContextProvider} from "./Cart/CartContext";
import {AdminPage} from "./admin/AdminPage";
import {SignUpPage} from "./authentication/SignUpPage";
import {PasswordReset} from "./authentication/PasswordReset";
import SuccessPayment from "./Pages/SuccessPayment";
import {PaymentForm} from "./Cart/payment";
import StripeProvider from "./Cart/StripeProvider";


function App() {

    return (
        <ContextProvider>
            <TopMenu/>
            <div className="container">
              <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/menu" element={<MenuPage/>}></Route>
                <Route path="/order" element={<OnlineOrderingPage/>}></Route>
                <Route path="/about" element={<AboutUsPage/>}></Route>
                <Route path="/location" element={<LocationPage/>}></Route>
                <Route path="/account" element={<LoginPage/>}></Route>
                  <Route path="/accountsignup" element={<SignUpPage/>}></Route>
                  <Route path="/passwordreset" element={<PasswordReset/>}></Route>

                  <Route path="/cart" element={<CartPage/>}></Route>
                  <Route path='/admin' element={<AdminPage/>}></Route>
                  <Route path="/create-payment-intent" element={<StripeProvider/>}></Route>
                  <Route path="/success" element={<SuccessPayment/>}></Route>
              </Routes>
            </div>
              <Divider/>
            <Footer/>
        </ContextProvider>
    );
}

export default App;
