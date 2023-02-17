import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import {store} from './redux/index'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Auth0Provider
      domain="dev-c2fel1eg8iqp6ark.us.auth0.com"
      clientId="UrkVwaJuWk91Fk9ulfoTTlKgt0NOKq0Z"
      redirectUri="http://localhost:3000/profile/" // donde estaba
    >
    
    <App />
    </Auth0Provider>
  </Provider>
    
  </BrowserRouter >
);