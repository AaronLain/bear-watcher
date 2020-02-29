import util from '../helpers/util.js'
import bearData from '../helpers/data/bearData.js'
const newBearPrinter = () => {
    let bears = bearData.getBears()
    let domString = ``;
    domString += '<div class="d-flex flex-wrap">';
    bears.forEach(bear => {
        domString += '<div class="col-3">';
        domString += `<div id="${bear.id}" class="card">`;
        domString += `<img class="img-fluid" src=${bear.imageUrl} alt="Card image cap">`;
        domString += '<div class="card-body text-center">';
        domString += `<h5 class="card-title">${bear.name}</h5>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
    });
    domString += '</div>';
    util.printToDom('new-bear-container', domString);
};


export default { newBearPrinter };