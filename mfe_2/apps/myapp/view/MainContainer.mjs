import MfePanel from '../../../src/view/MfePanel.mjs';
import Viewport from '../../../../main/node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'MyApp.view.MainContainer',
        autoMount: true,
        layout   : {ntype: 'fit'},
        style    : {padding: '3em'},

        items: [{
            module: MfePanel
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};
