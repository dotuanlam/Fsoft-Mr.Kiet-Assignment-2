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

function convertArrAnimalsInfor(animalInfor) {
    const animalsInforArr = animalInfor.map(
        infor => `name: ${infor.name} - weight: ${infor.weight}kg - size: ${infor.size}`
    )
    return animalsInforArr;
}

console.log(convertArrAnimalsInfor(getAnimalNameHaveWordT(animals)));