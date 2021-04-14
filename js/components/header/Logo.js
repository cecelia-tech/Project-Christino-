class Logo {
    constructor(parentDOM, data){
        this.parentDOM = parentDOM;
        this.data = data;
        
        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidDom) {
            return false;
        }
        if (!this.isValidData) {
            return false;
        }
        const DOM = this.parentDOM.querySelector('.leftLogo');

        if (!DOM) {
            console.error('pagal pateikta selektoriu nepavyko rasti elemento');
            return false;
        }
        this.DOM = DOM;
        this.render();
    }

    isValidDom() {
        return true;
    }
    isValidData() {
         return true;
    }

    render () {
        const {imgPath, mainLogo, alt} =this.data;
        let HTML = `
        <a href="#"><img src="${ imgPath + mainLogo}" alt="${alt}"class=" logo" ></a>
        `;
        this.DOM.insertAdjacentHTML('afterbegin', HTML)
    }
}
export { Logo }