import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig';
import React, { useState, createContext, useContext } from 'react';
import { Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useEffect } from "react";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const value = Auth()
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>)
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (auth.user !== null && auth.user.email) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export const Auth = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(function (idToken) {
        // console.log("token", idToken);
        setAuthToken(idToken)
      }).catch(function (error) {
        console.log('Token Collection fail.')
      });
  }

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        storeAuthToken();
        setUser({ name: user.displayName, email: user.email, photo: user.photoURL })
      } else {
        setUser(null)
      }
    });
  }, [])


  // Check User on Database and Insert New User
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState([]);

  useEffect(() => {
    if (verifyEmail === false) {
      // console.log('No Error Dise')
    } else {
      fetch(`https://plumbing-com.herokuapp.com/verify-email-address?email=` + user?.email, {
        headers: {
          "authorization": authToken
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            setVerifyStatus(data[0])
          } else {
            // console.log("Nothing")
          }
        })
    }
  }, [verifyEmail]);

  // Insert New User
  useEffect(() => {
    if (verifyStatus?.email === user?.email && verifyEmail === true) {
      // console.log(verifyStatus?.email, user.email, 'Kori Nai Vai')
    } else if (verifyStatus?.email !== user.email && verifyEmail == true) {
      const newUserDetails = { ...user, permission: 'customer' };
      const url = `https://plumbing-com.herokuapp.com/addNewUser`;
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserDetails)
      })
        .then(res => res.json())
        .then(data => {
          if (true) {
            // console.log(data)
          } else {
            console.log('Fail');
          }
        })
    }
    else {
      // console.log(verifyStatus?.email, user.email, 'Kicu Kori Nai Vai')
    }
  }, [verifyStatus]);

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        setUser({ name: user.displayName, email: user.email, photo: user.photoURL });
        setVerifyEmail(true);
        window.history.back(-1);
        storeAuthToken()

      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });

  }

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      setUser(null);

      console.log("Sign out");
    }).catch((error) => {
      console.log("Failed To SignOut");
    });

  }

  return {
    user,
    authToken,
    signOut,
    error,
    googleSignIn
  }
}
