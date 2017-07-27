import {
    Map
} from 'immutable';
import * as types from './constants';

// 用户金额
const userInfoData = Map({
    yxb: '默认金额 yxb:0'
});

export function userInfo(state = userInfoData, action) {
    switch (action.type) {
        case types.yxb:
            return state.set('yxb', action.val);
        default:
            return state;
    }
}