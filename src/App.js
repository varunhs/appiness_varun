import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import store from "./store/";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ToastContainer className='toasterStyle' autoClose={4000} pauseOnHover newestOnTop />
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
