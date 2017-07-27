import * as types from './constants';

export const setVal = (val) => ({
    type: types.set,
    val: val
});