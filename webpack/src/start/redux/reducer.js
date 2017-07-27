import {
    Map
} from 'immutable';
import * as types from './constants';

// 用户金额
const userInfoData = Map({
    gameScore: '默认金额:0'
});

export function userInfo(state = userInfoData, action) {
    switch (action.type) {
        case types.set:
            return state.set('gameScore', action.val);
        default:
            return state;
    }
}