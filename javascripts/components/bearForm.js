import bearData from '../helpers/data/bearData.js'
import river from '../components/river.js'

const newBearMaker = (e) => {
    e.preventDefault();
    const bears = bearData.getBears();
    const newBear =   {
        id: `bear${bearData.length + 1}`,
        name: $('#bear-name').val(),
        imageUrl: $('#bear-image').val(),
        timesAttempted: [],
        fishCaught: 0,
    };
    bears.push(newBear);
    document.getElementById('new-bear-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    river.newBearPrinter();
};

export default { newBearMaker }