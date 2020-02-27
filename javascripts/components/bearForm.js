import bearData from '../helpers/data/bearData.js'
import river from '../components/river.js'

const newBearMaker = (e) => {
    e.preventDefault();
    const newBear =   {
        id: `bear${bearData.bearArray.length + 1}`,
        name: document.getElementById('bear-name').value,
        imageUrl: document.getElementById('bear-image').value
    };
    bearData.bearArray.push(newBear);
    //document.getElementById('new-bear-form').reset();
    //document.getElementById('collapseOne').classList.remove('show');
    river.newBearPrinter();
};

export default { newBearMaker }