import { useEffect } from "react"
import { useState } from "react"

const useFirebase = () => {

    const [user, setUser] = useState({})

    useEffect(() => {

    }, [])

    const signInWithGoogle = () => {
        console.log('siging soon');
    }

    // return [user, setUser]
    return {user, signInWithGoogle}
}

export default useFirebase;