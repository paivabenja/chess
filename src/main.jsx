import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { MyContextProvider } from './context/MyContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>,
);
