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
        //console.log(this.parentDOM);
        const DOM = this.parentDOM.querySelector('.logoFile');

        if (!DOM) {
            console.error('pagal pateikta selektoriu nepavyko rasti elemento');
            return false;
        }
        this.DOM = DOM;
//console.log(this.DOM);
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
        <img src="${ imgPath + mainLogo}" alt="${alt}"class=" logo" >
        `;
        this.DOM.insertAdjacentHTML('afterbegin', HTML)
    }
}
export { Logo }