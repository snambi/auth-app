import React, { useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from 'firebase/auth'
import { firebaseAuth } from '../firebase'

const AuthContext = React.createContext()

function useAuth(){
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(false);
    const [loggedin, setLoggedin] = useState(false);

    function signUp(email, password){
        return createUserWithEmailAndPassword(firebaseAuth, email, password );
    }

    function login(email, password){
         return signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    function logout(){
        return signOut(firebaseAuth);
    }

    function resetPassword(email){
        return sendPasswordResetEmail(firebaseAuth, email);
    }

    function updateEmail(email){
        //return updateEmail(firebaseAuth, email);
    }

    function updatePassword(password){
    }

    function authListener(){
        const listener = onAuthStateChanged(firebaseAuth, user => {
            if( user ){
                console.log("Auth state changed, user = "+ JSON.stringify(user));
                //alert("Logged in 1 : "+ JSON.stringify(user)+ ", loggedin="+ loggedin);
                setCurrentUser(user);
                if(loggedin == false){
                    setLoggedin(true);  
                }
                console.log("Logged in 2 : "+ JSON.stringify(user)+ ", loggedin="+ loggedin);
            }else{
                if(loggedin == true ){
                    setLoggedin(false);
                    setCurrentUser(null);
                    console.log("Logged out : "+ JSON.stringify(user)+ ", loggedin="+ loggedin);
                }else{
                    console.log("Not handled: "+ JSON.stringify(user)+ ", loggedin="+ loggedin);
                }
            }
        });

        return listener;
    }

    useEffect(() => {
        authListener();
    }, []);

    const value = {
        currentUser,
        loading,
        loggedin,
        signUp,
        login,
        logout,
        setCurrentUser,
        setLoggedin
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }