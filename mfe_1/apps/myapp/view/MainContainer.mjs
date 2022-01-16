import MainComponent from '../../../src/view/MainComponent.mjs';
import Viewport      from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

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
            module: MainComponent
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};
