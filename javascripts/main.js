import bearData from '../javascripts/helpers/data/bearData.js'
import bear from '../javascripts/components/bearForm.js'
import river from '../javascripts/components/river.js'

const triedEvent = (e) => {
    const bearId = e.target.id
    bearData.addTries(bearId);
    river.newBearPrinter();
}

const caughtEvent = (e) => {
    const bearId = e.target.id;
    bearData.addFish(bearId);
    river.newBearPrinter();
}


const init = () => {
    $('#submit-new-bear').click(bear.newBearMaker);
    $('body').on('click', '.tried-btn', triedEvent);
    $('body').on('click', '.caught-btn', caughtEvent);
    river.newBearPrinter();
}

init();