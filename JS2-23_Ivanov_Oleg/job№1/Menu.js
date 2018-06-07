"use strict"

class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }

    render() {
        let result = `<ul class = "${this.className}" id = "${this.id}">`;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof MenuItem) {
                result += this.items[i].renderItem();
            };
            if (this.items[i] instanceof SubMenu) {

                let result1 = `<ul class = "${this.items[i].className}" id = "${this.items[i].id}">`;

                for (let j = 0; j < this.items[i].items.length; j++) {
                    if (this.items[i].items[j] instanceof MenuItem) {
                        result1 += this.items[i].items[j].renderItem();
                    };

                };
                result1 += '</ul>';
                result += result1;
            };
        };
        result += '</ul>';
        return result;

    }
    
    remove() {
        let deleteItem = document.getElementById(this.id);
        deleteItem.remove();
    }
}
