class Socials{
    constructor (parentDOM, data){
        this.parentDOM = parentDOM;
        this.data = data;

        this.DOM = null;

        this.init();
    }
    init() {
        if (!this.isValidParentDOM) {
            return false;
        }
    
        if (!this.isValidData) {
            return false;
        }

        const DOM = this.parentDOM.querySelector('.socials');
        this.DOM = DOM;

        this.render();
    }

    isValidParentDOM() {
        return true;
    }
    isValidData() {
        return true;
    }
    render(){
        let HTML = '';
        for (const social of this.data) {
            console.log(social);
            HTML += `<a href="#"><i class="fa ${social.facebook}"></i></a>
            <a href="#"><i class="fa ${social.twitter}" ></i></a>
            <a href="#"><i class="fa ${social.instagram}"></i></a>
            `
        }
        this.DOM.insertAdjacentHTML('afterbegin', HTML)
    }
}
export { Socials }