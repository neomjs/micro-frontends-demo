import Component from '../../../node_modules/neo.mjs/src/component/Base.mjs';

/**
 * @class MyApp.view.HomeComponent
 * @extends Neo.component.Base
 */
class HomeComponent extends Component {
    static getConfig() {return {
        className: 'MyApp.view.HomeComponent',
        html     : 'Home',
        style    : {color: 'darkgreen', fontSize: '80px', padding: '.5em'}
    }}
}

Neo.applyClassConfig(HomeComponent);

export {HomeComponent as default};
