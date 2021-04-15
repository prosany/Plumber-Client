import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig';
import React, { useState, createContext, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';


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
  const [authToken, setAuthToken] = useState(null)
  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        console.log("token", idToken);
        setAuthToken(idToken)
        // Send token to your backend via HTTPS
        // ...
      }).catch(function (error) {
        // Handle error
      });
  }

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        storeAuthToken();
        setUser({ name: user.displayName, email: user.email })
      } else {
        setUser(null)
      }
    });
  }, [])

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        setUser({ name: user.displayName, email: user.email })
        window.history.back();

        storeAuthToken()

      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage)
      });

  }

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      setUser(null);

      console.log("Sign out");
    }).catch((error) => {
      // An error happened.
      console.log("Error khaisi");
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
