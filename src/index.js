
import { createRoot } from "react-dom/client";
import React from 'react';
import App from './App';
import {AuthContextProvider} from './Context/AuthContext'

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </React.StrictMode>
);


