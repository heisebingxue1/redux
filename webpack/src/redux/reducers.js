import * as start from '../start/redux/reducer';
import * as game from '../game/redux/reducer';
import {
    combineReducers
} from 'redux';

export default {
    start: combineReducers(start),
    game: combineReducers(game)
}