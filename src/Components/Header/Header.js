import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
// import useFirebase from '../../Hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    // using coustom created hook
    // const { user, handleSignOut } = useFirebase()

    // ussing react-firebase-hooks
    const [user] = useAuthState(auth)


    return (
        <div className='header'>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>
                {
                    user && <>
                        <Link to="/vip">VIP</Link>
                    </>
                }
                <span>{user?.displayName && user.displayName}</span>

                {/* <img className='img' src={user?.photoURL && user.photoURL} alt="" /> */}

                {
                    user?.uid ?
                        <button onClick={() => signOut(auth)}>Signout</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>

        </div>
    );
};

export default Header;