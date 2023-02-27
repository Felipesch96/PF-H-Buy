// import { Auth0Provider } from '@auth0/auth0-react';
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-1lo20nd7cs356by5.us.auth0.com"
        clientId="CjEhb1rxjMzK2gByNm2mNHTnv9MR7weV"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <PersistGate persistor={persistor}>
          {" "}
          <App />
        </PersistGate>
      </Auth0Provider>
    </Provider>
  </BrowserRouter>
);
