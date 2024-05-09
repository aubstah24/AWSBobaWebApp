import React, { useState } from 'react';
import { Icon, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react';
import {Link } from "react-router-dom";
import LoginPage from './authentication/LoginPage'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function AuthComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic for handling login, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic for handling logout, set isLoggedIn to false
    setIsLoggedIn(false);

    <LoginPage/>
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dropdown icon='user circle outline' button>
            <DropdownMenu>
                <DropdownItem text='Profile'/>
                <Link to="/account">
                    <DropdownItem onClick={handleLogout} text='Logout'/>
                </Link>
            </DropdownMenu>
        </Dropdown>
      ) : (
        <Link to="/account">
            <Icon onClick={handleLogin} name="user circle" size="big"/>
        </Link>
      )}
    </div>
  );
}

export default AuthComponent;