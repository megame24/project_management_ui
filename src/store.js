import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import errorMiddleware from './middleware/errorMiddleware';
import authMiddleware from './middleware/authMiddleware';

const middleware = [
  errorMiddleware,
  authMiddleware,
  promiseMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger({ collapsed: true }));
}
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
