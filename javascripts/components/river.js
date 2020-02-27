import util from '../helpers/util.js'

const newBearPrinter = (bearArray, divId) => {
    let domString = ``;
    domString += '<div class="d-flex flex-wrap">';
    bearArray.forEach((bear) => {
    {
        domString += '<div class="col-3">';
        domString += `<div id="${bear.id}" class="card">`;
        domString += `<img class="card-img-top src="${bear.imageUrl}" alt="Card image cap">`;
        domString += '<div class="card-body text-center">';
        domString += `<h5 class="card-title">${bear.name}</h5>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
    }
    domString += '</div>';
    util.printToDom(divId, domString);
    });
}

export default { newBearPrinter };