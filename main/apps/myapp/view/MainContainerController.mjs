import ComponentController from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class MyApp.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends ComponentController {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.MainContainerController'
         * @protected
         */
        className: 'MyApp.view.MainContainerController'
    }}

    /**
     * @param {Object} data
     */
    onHomeButtonClick(data) {
        console.log('home', data);
    }
}

Neo.applyClassConfig(MainContainerController);

export {MainContainerController as default};
