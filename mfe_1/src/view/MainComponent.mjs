import Component from '../../node_modules/neo.mjs/src/component/Base.mjs';

/**
 * @class Mfe1.view.MainComponent
 * @extends Neo.component.Base
 */
class MainComponent extends Component {
    static getConfig() {return {
        className: 'MyApp.view.MainComponent',
        html     : 'MFE 1',
        style    : {color: 'darkgreen', fontSize: '80px', padding: '.5em'}
    }}
}

Neo.applyClassConfig(MainComponent);

export {MainComponent as default};
