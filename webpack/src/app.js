import './common/zepto-1.1.6';
import sceneStart from 'start/scene';

$('body').html('准备进入场景');

setTimeout(() => {
    sceneStart();
}, 2000);