import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { Router } from 'react-router-dom';
import { createStore } from './app/store/createSotre';
import { Provider } from 'react-redux';
import history from './app/utils/history';
import logger from './app/services/log.service';
import reportWebVitals from './reportWebVitals';

import './index.css';

const store = createStore();
logger.init();

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);

reportWebVitals();
