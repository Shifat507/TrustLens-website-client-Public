import React, { Children, useEffect, useState } from 'react';
// import AuthContext from './AuthContext';
// import auth from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import AuthContext from './AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
// import AuthContext from './AuthContext';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userSignOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const userUpdateData = (updatedData) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })

        return () =>{
            unSubscribe();
        }
    },[])
 

    const authInfo = {
        user,
        setUser,
        createUser,
        userLogin,
        userSignOut,
        userUpdateData,
        handleGoogleSignIn,
        loading
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        
        // <AuthContext.Provider value={authInfo}>
        //     {children}
        // </AuthContext.Provider>
    );
};

export default AuthProvider;