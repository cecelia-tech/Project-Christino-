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
    render(){
        let HTML = '';
        for (const navItem of this.data) {
            HTML +=`<a href="${navItem.href}">${navItem.text}`
        }
        this.DOM.insertAdjacentHTML('afterbegin', HTML)
    }
}
export {Navigation}