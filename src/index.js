import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';


export const Context = createContext(null)


ReactDOM.render(
  <Context.Provider value={{ // <-- props value
    user: new UserStore(), // <-- sent data to components from global state
    device: new DeviceStore() // <-- sent data to components from global state
  }}>
    <App />, 
  </Context.Provider>,
  document.getElementById('root')
);