import {
    bindActionCreators
} from 'redux';
import {
    store,
    Connect
} from '../../redux/store';
import * as actions from './actions';

export default bindActionCreators(actions, store.dispatch);