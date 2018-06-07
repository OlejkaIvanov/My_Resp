"use strict"

class SubMenu extends Menu {
    constructor(id, className, items){
        super(id, className, items);
    }
    render() {
        super.render();
        console.log(id);
    }
}