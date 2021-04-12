/* 
patikrinti ar validus this.selector
patikrinti ar validus this.data
patikrinti ar pagal nurodyta this.selector egzistuoja elementas/vieta

generuoti HTML
    -validuoti ar kiekvienas this.data.list[i] yra validus
    -
istatyti i nurodyta vieta

padeti stebeti scroll event
    -jeigu turinys tampa matomas ekrane
    -inicijuoti skaiciu count up (nuo 0 iki nurodytos reiksmes
        -uztikrinti, kad count up ivyktu tik viena karta)
*/

class Achievements {
    constructor (selector, data) {
    this.selector = selector;
    this.data = data;

    this.DOM = null;

    this.init()
    
     
    }
    init () {
        if (!this.isValidSelector()) {
            console.error('ERROR nevalidus selektorius');
            return false;
        }

        if (!this.isValidData()) {
            console.error('ERROR nevalidus duomenys');
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.warn('ERROR pagal pateikta selektoriu nepavyko rasti nurodyto elemento');
            return false;
        }

        this.DOM = DOM;

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('Error: selector turi buti tekstas');
            return false;
        }
        if (this.selector === '') {
            console.warn('Error: selector turi buti ne tuscias tekstas');
            return false;
        }
        return true;
    }
    isValidData () {
        if (typeof this.data !== 'object' ||
        Array.isArray(this.data)) {
            console.warn('ERROR duomenys turi buti objekto tipo');

            return false;
        }
        if (this.data.list === undefined ||
            !Array.isArray(this.data.list)) {
            console.warn('ERROR duomenyse esantis list turi buti array tipo');
            return false;
        }
        if (this.data.list.length === 0) {
            console.warn("ERROR duomenyse esamtis turi buti ne tuscias array");
            return false;
        }
        return true;
    }

    render () {
        let HTML = '';

        for (const item of this.data.list) {
            HTML += ` <div class="achievement">
            ${item.icon}
            <p class="numbers">0</p>
        <p class="text"> ${item.text}</p></div>`;
        console.log(HTML);
        }
        for (let i = 0; i < this.data.list.length; i++) {
            const item = this.data.list[i];
            
        }
        this.DOM.innerHTML = HTML;
    }
    
}

export { Achievements};