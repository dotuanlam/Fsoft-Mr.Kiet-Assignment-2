const arrA = [1, 2, 3, 4];

function multiTwoEachElementEvenNumber(numebr) {
    const arrB = numebr.map(numb => {
        if (numb % 2 === 0) {
            return numb * 2;

        } else {
            return numb
        }
    })
    return arrB;
}
console.log(multiTwoEachElementEvenNumber(arrA));