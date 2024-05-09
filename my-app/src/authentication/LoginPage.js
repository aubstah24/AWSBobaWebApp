import React from 'react';
import {Container, Header, Image, Input} from "semantic-ui-react";
import {Link} from "react-router-dom";
import mail from '../images/email.png';
import pass from '../images/password.png';
import axios from "axios";


export const LoginPage = () => {
    const [username, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');




    const handleLogin = () => {
        // confirm credentials
        // if success
            // sent to landing page with profile button
        // else fail
            // stay on page and send alert box

    }

    return (
      <div className='logincontainer' style={{textAlign: "center"}}>
          <Header className='loginheader' as="h1">Sign In Here</Header>
          <div className='underline'></div>
          <Container className='inputs'>
            <div className='inputdiv'>
                <Image src={mail} alt="person" />
                <Input type='email' name='user' placeholder='john@doe.com' onChange={(e) => setEmail(e.target.value)}/>
            </div>
              <div className='inputdiv'>
                  <Image src={pass} alt="person"/>
                  <Input type='password' placeholder='Password' name='user' onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className='submit-container' >
                 Login
              </div>
          </Container>
          <br/>
          <Link to="/accountsignup">Don't Have An Account?</Link>
          <br/>
          <Link to="/passwordreset">Forgot Password</Link>

      </div>
    );
    }
