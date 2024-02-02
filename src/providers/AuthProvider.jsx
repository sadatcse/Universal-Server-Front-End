'use client'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import { createContext, useEffect, useState, } from 'react';
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userRole, setUserRole] = useState("user");
    const [themMode, setThemMode] = useState(false);
    
   
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = ()=> {
        return signInWithPopup(auth, githubProvider)
      }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { 
        user, 
        loading,
        setLoading,
        createUser, 
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        userRole,
        setUserRole,
        themMode,
        setThemMode
    }

    return (
        <AuthContext.Provider value={authInfo} >
           <main className={themMode ? "bg-neutral-800" : ""} data-mode={themMode ? "dark" : "light"}>
           {children}
           </main> 
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}