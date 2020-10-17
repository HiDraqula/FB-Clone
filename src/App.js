import React, { useEffect } from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';
import { useStateValue } from './StateProvider';

import { auth } from './firebase'
import { actionTypes } from './Reducer'


function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null
        })
      }
    })
  }, [])



  return (
    <div className="App">
      {
        user ? (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        ) : (
            <Login />
          )
      }

    </div>
  );
}

export default App;
