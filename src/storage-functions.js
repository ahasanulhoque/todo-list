//The functions in this module will be used to save projects in localStorage
//if it is available

function storageAvailable(type) {
    //This function is copied from the MDN Web Docs page on using the Web Storage API,
    //found here: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API

    //It is not exported but is used in the other functions in this module to test whether storage
    //is available

    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

const saveProjects = (itemName, itemValue) => {
    if (storageAvailable('localStorage')) {
        //If localStorage is available, then save projectsList
        //itemName should be a string, and the name of the variable we are looking for
        //itemValue should be the value to be saved into itemName
        localStorage.setItem(itemName, JSON.stringify(itemValue));
    }
}

const getProjects = (itemName, itemValue, defaultValue) => {
    //itemName should be a string, and the name of the variable we are looking for
    if (storageAvailable('localStorage') && localStorage.getItem(itemName)) {
        //If localStorage is available and projectsList is already populated,
        //then check if projectsList has at least 1 project.
        if (JSON.parse(localStorage.getItem(itemName)).length >= 1){
            //If projectsList does have at least 1 project, then retrieve projects from storage
            return JSON.parse(localStorage.getItem(itemName));
        }
    } 
    
    //If localStorage is not available, projectsList does not exist yet, or if projectsList
    //does not have at least 1 project, then populate projectsList with default project 
    itemValue.push(defaultValue);
    return itemValue;
    
}

export { saveProjects , getProjects }