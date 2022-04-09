import { useEffect } from "react"
import { useState } from "react"
import { auth } from '../Firebase/firebase.init'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


// provider
const googleProvider = new GoogleAuthProvider()


const useFirebase = () => {

    const [user, setUser] = useState({})

    useEffect(() => {

    }, [])

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                alert(error)
              })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return { user, signInWithGoogle, handleSignOut }
}

export default useFirebase;