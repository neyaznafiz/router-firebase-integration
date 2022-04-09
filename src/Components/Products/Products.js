import React from 'react';
import './Products.css'
import { auth } from '../../Firebase/firebase.init';
// import useFirebase from '../../Hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const Products = () => {

    // using coustom created hook
    // const {user} = useFirebase()

    // ussing react-firebase-hooks
    const [user] = useAuthState(auth)

    return (
        <div>
            <h2>Knock Knock ! who is there</h2>
            <h5>{user? user.displayName : 'voooooott'}</h5>
        </div>
    );
};


export default Products;