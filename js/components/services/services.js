import {isValidServices} from './isValidServices.js';
import {isValidServiceItem} from './isValidServiceItem.js';


function services(selector, data) {
    //imput validation

    if (!isValidServices(selector, data)) {
        return false;
    }

    //logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas');
        return false;
    }
    const {list, maxCount} = data;
   // const servicesArray = data.list;

    let HTML ='';
    let generatedServicesCount = 0;
    for (let i = 0; i < list.length; i++) {
        const service = list[i];

        //service iyem validation
        if (!isValidServiceItem(service)) {
            continue;
        }
        // galima abu situs itemus apjungt
        if (!service.active) {
            continue;
        }
        if (generatedServicesCount === maxCount) {
            break;
        }
        generatedServicesCount++;
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