import React, { useState } from 'react';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
import {Link, Navigate} from "react-router-dom";
import {LandingPage} from "./LandingPage";
import {Button, Header, Input} from "semantic-ui-react";

export const SignUpPage = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const signUp = async () => {
        try {
            const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
            const params = {
                ClientId: '6ks8eupgd186s0j89rc8umk841',
                Username: username,
                Password: password,
                UserAttributes: [
                    { Name: 'name', Value: name }, // Include the name attribute
                    { Name: 'email', Value: email }
                ]
            };
            await cognitoIdentityServiceProvider.signUp(params).promise();
            console.log('User signed up successfully');
            Navigate(LandingPage); // Redirect to confirmation page or display success message
        } catch (error) {
            console.error('Error signing up:', error);
            alert("Couldn't Sign Up"); // Display error message to user
        }
    };

    return (
        <div className="register">
            <Header as="h2">Register Here</Header>
            <Input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></Input>
           <br/>
            <Input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></Input>
           <br/>
            <Input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></Input>
            <br/><br/>
            <Button color="black" onClick={signUp}>Sign up</Button>
            <br/>
            <p>Already Have a Login? </p>
            <Link to="/login">Click here</Link>
        </div>
     );
};
