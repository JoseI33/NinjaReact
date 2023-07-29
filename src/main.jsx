import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RouterPrincipal from './router/RouterPrincipal.jsx'
import Navbar from '../components/Navbar.jsx'

//bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterPrincipal/>
    <App />
  </React.StrictMode>,
)
