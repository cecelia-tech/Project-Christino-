function services(selector, data) {
    //imput validation

    //logic
    const DOM = document.querySelector(selector);
    const {list} = data;
   // const servicesArray = data.list;

    let HTML ='';
    for (let i = 0; i < list.length; i++) {
        const service = list[i];
        if (!service.active) {
            continue;
        }
        HTML += `<div class="col-12 col-md-6 col-lg-4 services center"> 
                ${service.icon}
                <p class="mini-title center">${service.title}</p>
                <p class="text-grey">${service.text}</p></div>`
    }
    //post logic validation

    //result
DOM.innerHTML = HTML;
}
export {services}