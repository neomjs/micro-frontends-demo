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
     *
     * @param {String} mainview
     * @returns {Number}
     */
    getTabIndex(mainview) {
        let map = {
            home: 0,
            mfe1: 1,
            mfe2: 2
        };

        return map[mainview];
    }

    /**
     *
     */
    onComponentConstructed() {
        super.onComponentConstructed();

        if (!Neo.config.hash) {
            this.onHashChange({
                hash      : {mainview: 'home'},
                hashString: 'mainview=home'
            }, null);
        }
    }

    /**
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {
        this.getReference('tab-container').activeIndex = this.getTabIndex(value.hash.mainview);
    }

    /**
     * @param {Object} data
     */
    onHomeButtonClick(data) {
        Neo.Main.editRoute({
            mainview: 'home'
        });
    }
}

Neo.applyClassConfig(MainContainerController);

export {MainContainerController as default};
