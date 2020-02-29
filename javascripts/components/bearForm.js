import bearData from '../helpers/data/bearData.js'

const newBearMaker = (e) => {
    e.preventDefault();
    const newBear =   {
        id: `bear${bearData.length + 1}`,
        name: document.getElementById('bear-name').value,
        imageUrl: document.getElementById('bear-image').value
    };
    bearData.push(newBear);
    //document.getElementById('new-bear-form').reset();
    //document.getElementById('collapseOne').classList.remove('show');
};

export default { newBearMaker }