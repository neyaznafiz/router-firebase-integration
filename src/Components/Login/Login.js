import React from 'react';
import './Login.css'

const Login = () => {
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
        </div>
    );
};

export default Login;