import util from '../helpers/util.js'

const newBearPrinter = (bearArray, divId) => {
    let domString = ``;
    domString += '<div class="d-flex flex-wrap">';
    for (let i = 0; i < bearArray.length; i++) {
        domString += '<div class="col-3">';
        domString += `<div id="${bearArray[i].id}" class="card">`;
        domString += `<img class="card-img-top src="${bearArray[i].imageUrl}" alt="Card image cap">`;
        domString += '<div class="card-body text-center">';
        domString += `<h5 class="card-title">${bearArray[i].name}</h5>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
    }
    domString += '</div>';
    util.printToDom(divId, domString);
};


export default { newBearPrinter };