import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {

    const {signInWithGoogle} = useFirebase()

    return (
        <div>

            <h2>Login Please</h2>

            <form className='login'>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>

            <button onClick={signInWithGoogle}>Continue with google</button>
        </div>
    );
};

export default Login;