import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

function LoginPage({ isPassedToWithAuthenticator, signOut, user }) {

    if (!isPassedToWithAuthenticator) {
        throw new Error(`isPassedToWithAuthenticator was not provided`);
    }

    return (
      <>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </>
    );
    }

export default withAuthenticator(LoginPage);

    export async function getStaticProps() {
    return {
      props: {
        isPassedToWithAuthenticator: true,
      },
    };
}

    /*
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
            const params = {
                AuthFlow: 'USER_PASSWORD_AUTH',
                ClientId: '6ks8eupgd186s0j89rc8umk841',
                AuthParameters: {
                    USERNAME: username,
                    PASSWORD: password
                }
            };
            const data = await cognitoIdentityServiceProvider.initiateAuth(params).promise();
            console.log('User authenticated successfully:', data);
            Navigate(LandingPage);
        } catch (error) {
            console.error('Error signing in:', error);
            alert("Invalid username or Password");// Display error message to user
        }
    };

    return (
        <div className="login">
            <Header as="h2">Login Here</Header>
            <Input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></Input>
            <br/>
            <Input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></Input>
            <br/><br/>
            <Button color="black" onClick={signIn}>Login</Button>
            <br/>
            <Link to="/signup">Don't have an account?</Link>
        </div>
    )

}*/
