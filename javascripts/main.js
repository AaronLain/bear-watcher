import bearData from '../javascripts/helpers/data/bearData.js'
import bear from '../javascripts/components/bearForm.js'
import river from '../javascripts/components/river.js'

let bearArray = bearData.bearArray;

const init = () => {
    document.getElementById('submit-new-bear').addEventListener('click', bear.newBearMaker);
    river.newBearPrinter(bearArray, 'new-bear-container');
    console.log(bearData.bearArray)
}

init();