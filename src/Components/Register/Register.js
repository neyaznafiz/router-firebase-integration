import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h1>Register now please</h1>

            <form className='register'>
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input type="submit" value="Register" />
            </form>

        </div>
    );
};

export default Register;