import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import App from './App';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUS from './ContactUs';
import Login from './Login';
import Form from './Form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
<Home/>
<AboutUs/>
<ContactUS/>
<Login/>
<Form/>
  </React.StrictMode>
);

