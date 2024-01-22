"use client"

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Authentication/Firebase/Firebase.config";

export const AuthContext = createContext();
 const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const  signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth,currentUser,{
            displayName:name, photoURL:photo
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
    
        // Cleanup function
        return () => {
            unsubscribe(); // Unsubscribe when the component unmounts
        };
    }, []);
    

    const authInfo = {
        user,loading,createUser,googleLogin,signIn,signOut,updateProfile
    }


    
    
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;