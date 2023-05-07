import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth()
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GoogleAuthProvider();
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const handleGithubSingIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSingOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {
                user ?
                    <button onClick={handleSingOut}>Sing Out</button> :
                    <div>
                        <button onClick={handleGoogleSingIn}>Google login</button>
                        <button onClick={handleGithubSingIn}>Github login</button>
                    </div>
            }
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;