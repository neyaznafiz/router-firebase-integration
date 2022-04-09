import React from 'react';
import './Login.css'
// import useFirebase from '../../Hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    // using coustom created hook
    // const {signInWithGoogle} = useFirebase()

    // ussing react-firebase-hooks
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)

    // handle requare auth and back to previous loocation
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || './'

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

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

            {/* <button onClick={signInWithGoogle}>Continue with google</button> */}
            <button onClick={handleGoogleSignin}>Continue with google</button>
        </div>
    );
};

export default Login;