import bearData from '../javascripts/helpers/data/bearData.js'
import bear from '../javascripts/components/bearForm.js'
import river from '../javascripts/components/river.js'

const init = () => {
    $('#submit-new-bear').click(bear.newBearMaker);
    $('body').on('click', '.tried-btn', triedEvent);
    $('body').on('click', '.caught-btn', caughtEvent);
    river.newBearPrinter();
    console.log(bearData.bearArray)
}

init();