const animals = [{
        name: 'cat',
        size: 'smaill',
        weight: 5
    },
    {
        name: 'dog',
        size: 'medium',
        weight: 10
    },
    {
        name: 'elephant',
        size: 'big',
        weight: 5000
    }
];

function getAnimalWeightOver50kg(items) {
    const animalsInfor = items.filter(item =>
        item.weight > 50
    )
    return animalsInfor;
};

console.log(getAnimalWeightOver50kg(animals));