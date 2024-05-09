import {Navigate, Route} from 'react-router-dom';
import {AdminPage} from "./AdminPage";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <AdminPage /> : <Navigate to='/login' />
            }
        />
    );
};

export default ProtectedRoute;