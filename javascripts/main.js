import bearData from '../javascripts/helpers/data/bearData.js'
import bear from '../javascripts/components/bearForm.js'
import river from '../javascripts/components/river.js'

const init = () => {
    document.getElementById('submit-new-bear').addEventListener('click', bear.newBearMaker);
    river.newBearPrinter(bearData.getBears(), 'new-bear-container');
    console.log(bearData.bearArray)
}

init();