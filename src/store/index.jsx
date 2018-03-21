import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = composeWithDevTools(applyMiddleware(thunk));
export default createStore(reducer, middleware);
