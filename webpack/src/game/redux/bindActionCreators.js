import {
    bindActionCreators
} from 'redux';
import {
    store,
    getState,
    Connect
} from 'redux/store';
import * as actions from './actions';


export default bindActionCreators(actions, store.dispatch);