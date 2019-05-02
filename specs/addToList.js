require('../nightwatch.json');
require('../pageObjects/homePage.js');

module.exports = {
    'Mark multiple to do item as done' : function (browser) {
        const homePage = browser.page.homePage();

        homePage
            .navigate()
            .waitForElementVisible('#todo_6')
            .getAllTodoListItems()
            .assert.elementNotPresent("#todo0")
            .end()
    }
};