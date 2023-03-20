import React, { useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from 'firebase/auth'
import { firebaseAuth } from '../firebase'

const AuthContext = React.createContext()

function useAuth(){
    console.log("creating context")
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signUp(email, password){
        return createUserWithEmailAndPassword(firebaseAuth, email, password )
    }

    function login(email, password){
         return signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    function logout(){
        return signOut();
    }

    function resetPassword(email){
        return sendPasswordResetEmail(firebaseAuth, email);
    }

    function updateEmail(email){
        //return updateEmail(firebaseAuth, email);
    }

    function updatePassword(password){

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
            console.log("Auth state changed, user = "+ JSON.stringify(user));
            setCurrentUser(user)
        })

        return unsubscribe

    }, []);

    const value = {
        currentUser,
        loading,
        signUp,
        login,
        logout
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }