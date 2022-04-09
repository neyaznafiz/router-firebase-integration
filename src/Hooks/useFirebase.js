import { useEffect } from "react"
import { useState } from "react"
import { auth } from '../Firebase/firebase.init'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// provider
const googleProvider = new GoogleAuthProvider()


const useFirebase = () => {

    const [user, setUser] = useState({})

    useEffect(() => {

    }, [])

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
    }

    return { user, signInWithGoogle }
}

export default useFirebase;