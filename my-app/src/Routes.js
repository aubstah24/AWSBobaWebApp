import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {LandingPage} from "./Pages/LandingPage";
import {AboutUsPage} from "./Pages/AboutUsPage";
import {OnlineOrderingPage} from "./Pages/OnlineOrderingPage";
import {MenuPage} from "./Pages/MenuPage";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/"}>
                    <LandingPage />
                </Route>
                <Route>
                    <AboutUsPage/>
                </Route>
                <Route>
                    <OnlineOrderingPage/>
                </Route>
                <Route>
                    <MenuPage/>
                </Route>
            </Switch>
        </Router>
    )

}