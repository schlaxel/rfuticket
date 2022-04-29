import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

const App = () => <Home />;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
