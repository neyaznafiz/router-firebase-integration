import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Products.css'


const Products = () => {

    const {user} = useFirebase()

    return (
        <div>
            <h2>Knock Knock ! who is there</h2>
            <h5>{user? user.displayName : 'voooooott'}</h5>
        </div>
    );
};


export default Products;