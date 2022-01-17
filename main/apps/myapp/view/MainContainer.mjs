import MainContainerController from './MainContainerController.mjs'
import TabContainer            from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport                from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className : 'MyApp.view.MainContainer',
        autoMount : true,
        controller: MainContainerController,
        layout    : {ntype: 'vbox', align: 'stretch'},

        items: [{
            ntype: 'component',
            flex : 'none',
            html : 'Header',
            style: {backgroundColor: 'black', color: 'green', fontSize: '80px', padding: '.5em'}
        }, {
            module     : TabContainer,
            activeIndex: null, // render no items initially
            reference  : 'tab-container',

            items : [{
                module: () => import('./HomeComponent.mjs'),

                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    route  : 'mainview=home',
                    text   : 'Home'
                }
            }, {
                module: () => import('../../../../mfe_1/src/view/MainComponent.mjs'),
                html  : 'MFE 1 latest',

                tabButtonConfig: {
                    iconCls: 'fa fa-user',
                    route  : 'mainview=mfe1',
                    text   : 'MFE 1 latest'
                }
            }, {
                module: () => import('../../../../mfe_2/src/view/MfePanel.mjs'),

                listeners: {
                    homeButtonClick: 'onHomeButtonClick'
                },

                tabButtonConfig: {
                    iconCls: 'fa fa-cog',
                    route  : 'mainview=mfe2',
                    text   : 'MFE 2 latest'
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
