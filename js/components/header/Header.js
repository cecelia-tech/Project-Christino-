import {Logo} from './Logo.js';
import {Navigation} from './Nav.js';
class Header {
    constructor (selector, data){
        this.selector = selector;
        this.data = data;

        this.Dom = null;
        this.init();

    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        if (!this.isValidData()) {
            return false;
        }

        const DOM = document.querySelector(this.selector);
        
        if (!DOM) {
                console.error("ERROR pagal pateikta seloktoriu nepavyko rasti elemento");
                return false;
        }
        this.DOM = DOM;
        
        this.DOM.classList.add('header');
        this.renderBase();
        //validuoti selector
        //validuoti data
        //sukurti DOM vieta
        //sukurt logo
        //sukurti nav
        //uzregistruot event - scroll - position: static/fixed
    }
    isValidSelector() {
        return true;
    }
    isValidData() {
        return true;
    }
    renderBase() {
        const HTML = `
        <div class="row navigacija"><div></div><nav class="logoFile"></nav></div>
        `
        this.DOM.innerHTML = HTML; 

        const rowDOM = this.DOM.querySelectorAll('.row');
//console.log(rowDOM);
        new Logo(rowDOM, this.data.logo)
    }
}
export { Header }