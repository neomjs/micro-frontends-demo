import Component from '../../../main/node_modules/neo.mjs/src/component/Base.mjs';

/**
 * @class Mfe1.view.MfeContainer
 * @extends Neo.component.Base
 */
class MainComponent extends Component {
    static getConfig() {return {
        className: 'Mfe1.view.MainComponent',
        html     : 'MFE 1',
        style    : {backgroundColor: 'black', color: 'green', fontSize: '80px', padding: '.5em'}
    }}
}

Neo.applyClassConfig(MainComponent);

export {MainComponent as default};
