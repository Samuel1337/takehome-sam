// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import configureStore from "./store/store";
import Root from './components/root';
import reportWebVitals from './reportWebVitals';


document.addEventListener("DOMContentLoaded", () => {
    // set up Store
    let store;
    store = configureStore({});
    
    // set up Root
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);

    window.getState = store.getState;
});

reportWebVitals();

