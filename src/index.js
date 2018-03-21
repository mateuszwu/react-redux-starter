import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/index';
import axios from 'axios';
import routes from './routes';

const app = document.getElementById('root');
axios.defaults.baseURL = 'http://localhost:3000';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="container">
        {routes}
      </div>
    </Router>
  </Provider>, app);
registerServiceWorker();
