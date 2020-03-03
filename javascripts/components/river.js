import util from '../helpers/util.js'
import bearData from '../helpers/data/bearData.js'

const newBearPrinter = () => {
    let bears = bearData.getBears();
    let domString = ``;
    domString += '<div class="d-flex flex-wrap">';
    bears.forEach(bear => {
        domString += '<div class="col-3">'
        domString += '<div class="card">'
        domString += `<img class="img-fluid" src=${bear.imageUrl} alt="Card image cap">`
        domString += '<div class="card-body text-center">'
        domString += `<h5 class="card-title">${bear.name}</h5>`
        domString += '<div class="col-12">'
        domString += `<button style="margin: 1%;" id="${bear.id}" class="btn btn-dark tried-btn">Tried to Catch a Fish</button>`
        domString += `<button style="margin: 1%;" id="${bear.id}" class="btn btn-success caught-btn">Caught a Fish</button>`
        domString += '<div><strong>Fishing Attempts:</strong></div><ol>'
            for (let i = 0; i < bear.timesAttempted.length; i++) {
                domString += `<li><em>${bear.timesAttempted[i]}</em></li>`
            }
        domString += '</ol>'
        domString += `<div><strong>Fish Caught:</strong> ${bear.fishCaught}</div>`
        domString += '</div>'
        domString += '</div>'
        domString += '</div>'
        domString += '</div>'
    });
    domString += '</div>';
    util.printToDom('new-bear-container', domString);
};

export default { newBearPrinter };