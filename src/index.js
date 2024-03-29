import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router';
import { BrowserRouter } from 'react-router-dom';

const App = () => <Router />;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
