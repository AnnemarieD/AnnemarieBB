module.exports = {
    before : function(browser) {
        console.log('Setting up...');
        console.log('Session id = ' + browser.sessionId);
    },

    after : function(browser) {
        console.log('Closing down...');
        console.log('Session id = ' + browser.sessionId);
    },

    'Demo test TodoListMe' : function (browser) {
        browser
            .url('http://www.todolistme.net')
            .waitForElementVisible('#title')
            .assert.containsText('#title', 'Todo')
            .end();
    }
};