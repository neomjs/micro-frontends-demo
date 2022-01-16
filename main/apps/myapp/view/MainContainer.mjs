import TabContainer from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport     from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'MyApp.view.MainContainer',
        autoMount: true,
        layout   : {ntype: 'vbox', align: 'stretch'},

        items: [{
            ntype: 'component',
            flex : 'none',
            html : 'Header',
            style: {backgroundColor: 'black', color: 'green', fontSize: '80px', padding: '.5em'}
        }, {
            module     : TabContainer,
            activeIndex: 0, // default value

            items : [{
                module: () => import('./HomeComponent.mjs'),

                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Home'
                }
            }, {
                module: () => import('../../../../mfe_1/src/view/MainComponent.mjs'),
                html  : 'MFE 1 latest',

                tabButtonConfig: {
                    iconCls: 'fa fa-user',
                    text   : 'MFE 1 latest'
                }
            }]
        }, {
            ntype: 'component',
            flex : 'none',
            html : 'Footer',
            style: {backgroundColor: 'black', color: 'green', fontSize: '80px', padding: '.5em'}
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};
