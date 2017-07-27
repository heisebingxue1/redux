import {
    Store,
    GetState,
    Connect
} from 'redux/store';
import Dispatch from './redux/bindActionCreators';
import sceneGame from 'game/scene';

export default function sceneStart() {
    $('body').html('');
    let str = `<h4>场景 start</h4>
    <div>gameScore: <span id="gameScore"></span></div>
    <input id="switch" type="button" value="切换场景 game" />`;
    $('body').append(str);

    let co = Connect('start.userInfo.gameScore')((val, oldVal, state, oldState) => {
        $('#gameScore').html(val);
    });

    setTimeout(() => {
        /*
            相当于 Store.dispatch(setVal('100'))
        */
        Dispatch.setVal('100');
    }, 1000);

    $('#switch').on('click', () => {
        // 解除绑定
        co();
        sceneGame();
    });
}