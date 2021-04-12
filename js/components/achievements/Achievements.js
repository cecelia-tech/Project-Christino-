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
        this.addEvent();
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
        }
        for (let i = 0; i < this.data.list.length; i++) {
            const item = this.data.list[i];
            
        }
        this.DOM.innerHTML = HTML;
        
    }
    addEvent() {
        addEventListener('scroll', () => { 
            const allNumbersDOM = this.DOM.querySelectorAll('.numbers');


            for (let i = 0; i < allNumbersDOM.length; i++) {
                const numberDOM = allNumbersDOM[i];
                const elementTop = numberDOM.offsetTop;
                const elementHeight = numberDOM.clientHeight;

                const isVisible = scrollY + innerHeight >= elementTop + elementHeight;
                if (isVisible) {
                    this.animateNumber(numberDOM,i);
                }
            }
        })
    }
    animateNumber(elementDOM, elementIndex){
        //ar element.animater === true
        if (this.data.list[elementIndex].animated !== true) {
            //priesingu atveju - animuoju ir pazymiu, jog jau suanimuota
            const targetNumber = this.data.list[elementIndex].value;
            this.data.list[elementIndex].animated = true;

            const timeToAnimate = 3000;  //ms
            const fps = 30;             //kartai per sekunde
            const framesCount = timeToAnimate *fps / 1000; //kiek is viso kadru          
            const numberIncrement = targetNumber / framesCount;
            let printedValue = 0;
            let currentFrameIndex = 0;
            const timer = setInterval(() => {
                printedValue += numberIncrement;
                currentFrameIndex++;
                elementDOM.innerText = Math.round(printedValue);
                if (currentFrameIndex === framesCount) {
                    clearInterval(timer)
                }
            }, 1000 / fps )
            //setTimeout (func, time to wait in ms)
            // setTimeout(() => {
            //     elementDOM.innerText = targetNumber;
            // }, 2000)

        }
        
    }
}

export { Achievements};