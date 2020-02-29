const bearArray = [
    {
        id: 'bear1',
        name: 'Tim',
        imageUrl: 'https://kuow-prod.imgix.net/store/aa476ebf4d22287342ba74cc11298e6a.jpg?ixlib=rails-2.1.4&auto=format&crop=faces&fit=crop&h=634&w=924',
        timesAttempted: 2,
        fishCaught: 0
    }
];

//const fishingAttempts ()

const addTries = (bearId) => {
    const targetBear = bearArray.findIndex((x) => x.id === bearId);
    bearArray[targetBear].timesAttempted += 1;
    console.log(bearArray[targetBear].timesAttempted)
}

const addFish = (bearId) => {
    const targetBear = bearArray.findIndex((x) => x.id === bearId);
    bearArray[targetBear].fishCaught += 1;
    console.log(bearArray[targetBear].fishCaught)
}

const getBears = () => {
    return bearArray;
}

export default { getBears, addTries, addFish }