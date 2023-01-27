import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
        // Set User:
        const [user, setUser] = useState(null);
        // Create User:
        const createUser = (email, password) => {
                return createUserWithEmailAndPassword(auth, email, password);
        }
        // Set Observer:
        useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                        console.log(currentUser);
                        setUser(currentUser);
                });
                return () => unsubscribe();
        }, [])

        const signIn = (email, password) => {
                return signInWithEmailAndPassword(auth, email, password);
        }

        const updateUser = (userInfo) => {
                return updateProfile(user, userInfo);
        }

        const logOut = () => {
                return signOut(auth);
        }

        const authInfo = {
                createUser,
                signIn,
                updateUser,
                logOut,
                user
        }
        return (
                <AuthContext.Provider value={authInfo} >
                        {
                                children
                        }
                </AuthContext.Provider>
        );
};

export default AuthProvider;