import React, {useState} from 'react';
import {CognitoUser} from "amazon-cognito-identity-js";
import userpool from "../userpool";
import {Navigate} from "react-router-dom";
import {LandingPage} from "./LandingPage";



export const SignUp = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const handleSignup = async (e) => {
        const attributeList = [];
        attributeList.push(
            new CognitoUser({
                Name: 'email',
                Value: email,
                Password: password
            })
        );

        let username=email;

        userpool.signUp(username, password, attributeList, null, (err, data) => {
          if (err) {
              console.log(err);
              alert("Couldn't Sign Up")
          }  else {
              console.log(data);
              alert("User Added Successfully");
              Navigate(LandingPage);
          }
        });
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            <a href="/SignUp">Click Here to Sign Up</a>
        </div>


            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required/>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/LoginPage">Log in</a></p>
    </div>
    )
}
