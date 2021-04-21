class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.allGalleryItemsDOM = [];
        this.activeFilterIndex = 0;
        this.uniqueTags = [];

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
        this.formatData();
        this.render();
        this.addEvents();
    }
    isValidSelector() {
        return true;
    }
    isValidData() {
        return true;
    }

    formatData() {
        for (const item of this.data.list) {
            for (let i = 0; i < item.tags.length; i++) {
                item.tags[i] = item.tags[i].toLowerCase();
                
            }
        }
    }

    render() {


        const HTML = `<div class="filter">${this.generateFilter()}</div>
                <div class="list"> ${this.generateList()}</div>`
        this.DOM.innerHTML = HTML;
        this.DOM.classList.add('gallery');
        this.allGalleryItemsDOM = this.DOM.querySelectorAll('.list > .item');
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
            // const formatedTag = tag.toLowerCase(); //panaikinam, nes dadejom formatData(){}
            if (!uniqueTags.includes(tag)) {
                uniqueTags = [...uniqueTags, tag];
            }
        }
        for (const tag of uniqueTags) {
            HTML += `<div class="item">${tag}</div>`;
        }
        this.uniqueTags = ['all', ...uniqueTags]
        return HTML;
        
    }
    addEvents(){
        const filterItems = this.DOM.querySelectorAll('.filter > .item');
        filterItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                //nuimti senam elementui active clase
                // this.DOM.querySelector('.filter > .item.active').classList.remove('active');//toki metoda galim naudoti mazai galerijai
                filterItems[this.activeFilterIndex].classList.remove('active');
                item.classList.add('active');   
                this.activeFilterIndex = index;

                this.updateList(this.uniqueTags[index]);
            })  
        });
    }
    updateList(tag){
        
        
        for (let i = 0; i < this.data.list.length; i++) {
            const itemTags = this.data.list[i].tags;
            if (itemTags.includes(tag) || tag === 'all') {
                this.allGalleryItemsDOM[i].classList.remove('hidden');
            }else {
                this.allGalleryItemsDOM[i].classList.add('hidden');
            }
        }
    }
}
export { Gallery }

