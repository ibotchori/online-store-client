import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';

const App = observer(() => { // that component render on line mode, we need observer to keep track of state changes
  const {user} = useContext(Context) // get user from global state (UserStore)
  const [loading, setLoading] = useState(true) // state for spineer, while data receives from server

useEffect(() => {
    check().then(data => { // when page loading first, user status will check. in case successful (token is verify) user will login with his own account
      user.setUser(true) 
      user.setIsAuth(true) 
    }).finally(() => setLoading(false)) // remove spinner after server response
  
}, [])

if (loading) { // show spinner while loading = true
  return <Spinner animation={"grow"}/>
}

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />     
    </BrowserRouter>
  );
})

export default App;
