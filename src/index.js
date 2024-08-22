import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider as StoreProvider } from "react-redux";
import store from './store';
import App from './App';
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// Report log results : (for example: reportWebVitals(console.log))
reportWebVitals();
