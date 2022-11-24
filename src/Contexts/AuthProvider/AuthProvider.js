import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(true)


  //register-
  const register = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //update profile-
  const updateUser = (userName) =>{
    return updateProfile(auth.currentUser, {
      displayName: userName
    })
  }

  //login
  const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logInWithGoogle
  const logInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  // logOut
  const logOut = () =>{
    return signOut(auth)
  }





  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>unSubscribe()
  },[])

  const authInfo = {
    user,
    register,
    updateUser,
    logIn, 
    logInWithGoogle,
    logOut,
    loading,

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;