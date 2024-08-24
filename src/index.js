import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider as StoreProvider } from "react-redux";
import { Auth0Provider } from '@auth0/auth0-react';
import store from './store';
import App from './App';
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// Report log results : (for example: reportWebVitals(console.log))
reportWebVitals();
