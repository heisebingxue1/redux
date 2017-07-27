import {
    Store,
    GetState,
    Connect
} from 'redux/store';
import Dispatch from './redux/bindActionCreators';
import sceneStart from 'start/scene';

export default function sceneGame() {
    $('body').html('');
    let str = `<h4>场景 start</h4>
    <div>yxb: <span id="yxb"></span></div>
    <input id="switch" type="button" value="切换场景 game" />`;
    $('body').append(str);

    let co = Connect('game.userInfo.yxb')((val, oldVal, state, oldState) => {
        $('#yxb').html(val);
    });

    setTimeout(() => {
        /*
            相当于 Store.dispatch(yxbSet('100'))
        */
        Dispatch.yxbSet('100');
    }, 1000);
    $('#switch').on('click', () => {
        co();
        sceneStart();
    });
}