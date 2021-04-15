class Navigation {

    constructor(parentDOM, data) {
        this.parentDOM = parentDOM;
        this.data = data;

        this.DOM=null;

        this.init();
        this.render();
    }
    init(){
        if (!this.isValidParentDOM) {
            return false;
        }
        if (!this.isValidData) {
            return false;
        }
        const DOM = this.parentDOM.querySelector('.navItems');
        if (!DOM) {
            console.error('pagal pateikta selektoriu nepavyko rasti elemento');
            return false;
        }
        this.DOM = DOM;
        //console.log(this.DOM);
    }
    isValidParentDOM(){
        return true;
    }
    isValidData() {
        return true;
    }
    submenuDirection(direction) {
        const available = ['bottom', 'left', 'right'];
        return available.includes(direction)? direction : available[0];
    }
    generateHTML(navItem){
        let HTML = '';

        if (navItem.submenu) {
            const labelHTML = navItem.type === 'link'
            ? `<a href="${navItem.href}" class="label">${navItem.text}<i class="fa fa-angle-down"></i></a>` :`<div class="label">${navItem.text}">$</div>`;

            let submenuHTML = '';
            for (const submenuItem of navItem.submenu) {
                submenuHTML += this.generateHTML(submenuItem);
            }
            HTML += `<div class="dropdown ${this.submenuDirection(navItem.submenuDirection)}">
                        ${labelHTML}
                        <div class="submenu">
                        ${submenuHTML}
                        </div>
            </div>`;
        } else {
            HTML += `<a href="${navItem.href} "class="item">${navItem.text}</a>`;
        }


        return HTML;
    }
    render(){
        let HTML = '';
        for (const navItem of this.data) {
            HTML += this.generateHTML(navItem)
        }
        this.DOM.insertAdjacentHTML('afterbegin', `${HTML}`)
    }
}
export {Navigation}