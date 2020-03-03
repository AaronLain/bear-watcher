    import bearData from '../helpers/data/bearData.js'
    import bear from '../components/bearForm.js'
    import river from '../components/river.js'

    const triedEvent = (e) => {
        const bearId = e.target.id
        bearData.addTries(bearId);
        river.newBearPrinter();  
    };
    
    const caughtEvent = (e) => {
        const bearId = e.target.id;
        bearData.addFish(bearId);
        river.newBearPrinter(); 
    };
    
    const webEvents = () => {
        river.newBearPrinter();
        $('#submit-new-bear').click(bear.newBearMaker);
        $('body').on('click', '.tried-btn', triedEvent);
        $('body').on('click', '.caught-btn', caughtEvent);
    }

    export default { webEvents };
    

