const homePageCommands = {
    getAllTodoListItems: function() {
        this.api.pause(1000);
        let listItems = document.querySelectorAll('@todoListItem')
        return listItems
    },
    deleteAllTodoItems: function() {
        this.api.pause(1000);
        let listItems = this.getAllTodoListItems();
        [].forEach.call(listItems, function (item) {
            this.click('@todoListItemDeleteButton')
            this.pause(1000)
        });

        return this;
    }
};

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
