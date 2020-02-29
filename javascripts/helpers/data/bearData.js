const bearArray = [
    {
        id: 'bear1',
        name: 'Tim',
        imageUrl: 'https://kuow-prod.imgix.net/store/aa476ebf4d22287342ba74cc11298e6a.jpg?ixlib=rails-2.1.4&auto=format&crop=faces&fit=crop&h=634&w=924'
    }
];

const getBears = () => {
    console.log(bearArray);
    return bearArray;
    
}

export default { getBears }