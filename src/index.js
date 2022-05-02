import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import { BrowserRouter } from 'react-router-dom';

const App = () => <Home />;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
