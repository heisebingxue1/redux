import rootReducer from './reducers';
import ThunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop
)(createStore);

const reducer = combineReducers(rootReducer);

export default function configureStore(initialState){
    return finalCreateStore(reducer, initialState);
}