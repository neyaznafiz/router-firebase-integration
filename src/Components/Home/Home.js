import React from 'react';
import './Home.css'
// import useFirebase from '../../Hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase.init';

const Home = () => {

    // using coustom created hook
    // const { user } = useFirebase()


    // ussing react-firebase-hooks
    const [user] = useAuthState(auth)


    return (
        <div>
            <h2>This is Home</h2>

            <div>
                <p>Current user is :- </p>
                {
                    user ?
                        <>
                            <img src={user.photoURL} alt="" />
                            <h5>Name : {user.displayName}</h5>
                            <p>E-mail : {user.email}</p>
                        </>
                        : 'No body here'
                }

            </div>
        </div>
    );
};

export default Home;