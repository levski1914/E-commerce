import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth,db} from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import {doc,getDoc} from 'firebase/firestore'

const AuthContext=createContext();

export const useAuth=()=>{
    return useContext(AuthContext)
}


export const AuthProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', user.uid));
                    if (userDoc.exists()) {  
                        setCurrentUser({ ...user, name: userDoc.data().name });
                    } else {
                        console.error("Document not found");
                        setCurrentUser(null);
                    }
                } catch (error) {
                    console.error("Error fetching document:", error.message);
                    setCurrentUser(null);
                }
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const logout=()=>{
        return signOut(auth);
    }
    const value={
        currentUser,
        logout
    };

    return(
        <AuthContext.Provider value={value}>
            {!loading&&children}
        </AuthContext.Provider>
    )
}