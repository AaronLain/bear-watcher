import bearData from '../helpers/data/bearData.js'
import river from '../components/river.js'

const newBearMaker = (e) => {
    e.preventDefault();
    const bears = bearData.getBears();
    const newBear =   {
        id: `bear${bearData.length + 1}`,
        name: document.getElementById('bear-name').value,
        imageUrl: document.getElementById('bear-image').value,
        timesAttempted: 0,
        fishCaught: 0,
    };
    bears.push(newBear);
    document.getElementById('new-bear-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    river.newBearPrinter();
};

export default { newBearMaker }