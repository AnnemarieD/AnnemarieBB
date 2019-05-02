const homePageCommands = {
    getAllTodoListItems: function(browser) {
        this.api.pause(1000);
        this.api.elements('@todoListItem', 'li', function (result) {
        result.value.map(function(element, err) {
            this.api.elementIdAttribute(element.ELEMENT, 'innerText', function(res) {
                console.log(res.value)
            })
        })

        this.api.elements('@todoListItem', 'li', function(result) {
            console.log(result);
            return(result);
        });
        return this.result;
    })
    // deleteAllTodoItems: function(browser) {
    //     this.api.pause(1000);
    //     let listItems = this.getAllTodoListItems();
    //     // this.api.elements(listItems, function() {
    //     //    this.click('@todoListItemDeleteButton');
    //     //    this.pause(1000);
    //     // });
    //     [].forEach.call(listItems, function (item) {
    //         this.click('@todoListItemDeleteButton');
    //         this.pause(1000);
    //     });
    //
    //     return this;
    // }
}
}

module.exports = {
    commands: [homePageCommands],
    url: 'http://www.todolistme.net',
    elements: {
        title: {
            selector: '#title'
        },
        todoListItem: {
            selector: '#mytodos .li'
        },
        todoListItemDeleteButton: {
            selector: '#todo_1 > img'
        }
    }
};
