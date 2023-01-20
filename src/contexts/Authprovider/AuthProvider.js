import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const whatEver = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user state changed')
            setUser(currentUser)
        })
        return () => unsubscribe();
    }, [])
    const authInfo = { user, whatEver, logOut, signUp, signIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;