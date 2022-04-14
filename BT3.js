const animals = [{
        name: 'cat',
        size: 'small',
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

function getAnimalNameHaveWordT(nameAnimals) {
    const animalsInfor = nameAnimals.filter(
        names => names.name.includes('t')
    )
    return animalsInfor;
}
console.log(getAnimalNameHaveWordT(animals));