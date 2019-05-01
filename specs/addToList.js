require('../nightwatch.json');

module.exports = {
    'Mark multiple to do item as done' : function (browser) {
        var homePage = browser.page.homePage();

        homePage.navigate();

        browser
            .waitForElementVisible('#todo_6')
            .browser.homePage.homePageCommands.deleteAllTodoItems()
            .assert.elementNotPresent("#todo0")
            .end()
    }
}