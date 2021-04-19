class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.init();
    }
    init() {
        if (!this.isValidSelector) {
            return false;

        }
        if (!this.isValidData) {
            return false;
        }
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: could not locate the element by provided selector');
            return false;
        }

        this.render();
        this.generateFilter();
    }
    isValidSelector() {
        return true;
    }
    isValidData() {
        return true;
    }
    render() {


        const HTML = `<div class="filter">${this.generateFilter()}</div>
                <div class="list"> ${this.generateList()}</div>`
        this.DOM.innerHTML = HTML;
        this.DOM.classList.add('gallery');
        
    }
    generateList() {
        let HTML = '';
        for (const item of this.data.list) {
            HTML += `<div class="item">
            <img src="${this.data.imgPath + item.img}" class="blogPic" alt="">
            <div class="content">
            <div class="blogTitle"><a href="${item.href}"> ${item.title}</a></div>
            <div class="blogSubtitle"> ${item.subtitle}</div></div>
            </div>`;
            
        }
        return HTML;
        
    }
    generateFilter(){
        let HTML = `<div class="item active">All</div>`;
        let allTags = [];
        let uniqueTags = [];

        //susirenkame visus tagus

        for (const item of this.data.list) {
            
            allTags = [...allTags, ...item.tags];

        }
        //atfiltruojame unikalius tagus
        for (const tag of allTags) {
            const formatedTag = tag.toLowerCase();
            if (!uniqueTags.includes(formatedTag)) {
                uniqueTags = [...uniqueTags, formatedTag];
            }
        }
        for (const tag of uniqueTags) {
            HTML += `<div class="item">${tag}</div>`;
        }console.log(HTML);
        return HTML;
        
    }
}
export { Gallery }

