import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../../firebase-config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();
const Authprovider = ({children}) => {
    const [user, setUser] =useState(null);

    const createUser = (email, password )=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (displayName, photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName, photoURL
          });
    }
    const signIn = (email, password, )=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInGoogle = ()=>{
        return signInWithPopup(auth, provider);
    }
    const signInGit = ()=>{
        return signInWithPopup(auth, providerGit);
    }
    const logOut =() =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })

        return()=>{
            return unsubscribe();
        }
    }, [])


    const authInfo ={
        user,
        createUser,
        updateUser,
        signIn,
        signInGoogle,
        signInGit,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;