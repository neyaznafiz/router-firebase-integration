import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Home.css'

const Home = () => {

    const { user } = useFirebase()


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