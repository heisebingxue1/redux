import * as types from './constants';

function makeActionCreator(type, ...argNames) {
    return function (...args) {
        let action = {
            type
        }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}

// 下面的写法等价于这样
// export const add = (val) => ({
//     type: types.add,
//     val
// });
// 注意下面的参数不能用 type, 因为 action 已经有一个type
export const yxbSet = makeActionCreator(types.yxb, 'val');