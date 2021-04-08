function isValidServiceItem(service) {

    if (typeof service !== 'object' ||
    Array.isArray(service)) {
        console.log('ERROR service yra netinkamo tipo');
        return false;
    }

    if (service.icon === undefined) {
        console.log('neduota icon reiksme');return false;
    } else if (typeof service.icon !== 'string' || service.icon === '') {
        console.warn('ERROR icon turi buti ne tuscias tekstas'); return false;
    }

     if (service.title === undefined) {
        console.log('neduota title reiksme');return false;
    } else if (typeof service.title !== 'string' || service.title === '') {
        console.warn('ERROR title turi buti ne tuscias tekstas'); return false;
    }
    if (service.text === undefined) {
        console.log('neduota text reiksme');return false;
    } else if (typeof service.text !== 'string' || service.text === '') {
        console.warn('ERROR text turi buti ne tuscias tekstas'); return false;
    }

    if (service.active === undefined) {
        console.log('ERROR neduota active reiksme '); return false;
    } else if (typeof service.active !== 'boolean') {console.warn('ERROR active netinkamo tipo (tyri buti boolean)'); return false;
    }
    return true;
}

export {isValidServiceItem}