import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import './reset.css';
import configureStore from "./store/store";
import Root from './components/root';
import reportWebVitals from './reportWebVitals';


document.addEventListener("DOMContentLoaded", () => {
    // set up Store
    let store;
    store = configureStore({});
    
    // set up Root
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Root store={store} />);

    window.getState = store.getState;
});

reportWebVitals();