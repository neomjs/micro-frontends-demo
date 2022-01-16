import Panel         from '../../../main/node_modules/neo.mjs/src/container/Panel.mjs';
import Mfe1Component from '../../../mfe_1/src/view/MainComponent.mjs';

/**
 * @class Mfe2.view.MfePanel
 * @extends Neo.container.Panel
 */
class MfePanel extends Panel {
    static getConfig() {return {
        className: 'Mfe2.view.MfePanel',

        containerConfig: {
            layout: {ntype: 'hbox', align: 'stretch'}
        },

        items: [{
            ntype: 'component',
            html : 'MFE 2',
            style: {backgroundColor: '#111', color: 'green', fontSize: '80px', padding: '.5em'}
        }, {
            module: Mfe1Component
        }]
    }}

    construct(config) {
        let me = this;

        me.headers = [{
            dock : 'bottom',
            items: [{
                text   : 'Home',
                handler: me.onHomeButtonClick.bind(me)
            }]
        }];

        super.construct(config);
    }

    /**
     * @param {Object} data
     */
    onHomeButtonClick(data) {
        console.log('onHomeButtonClick', data);
        this.fire('homeButtonClick');
    }
}

Neo.applyClassConfig(MfePanel);

export {MfePanel as default};
