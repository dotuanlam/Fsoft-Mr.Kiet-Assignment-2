const arrA = [1, 2, 3, 4];

function sumArrAEvenNumberMultiTwo(number) {
    const arrB = number.reduce((total, currentValue) => {
        if (currentValue % 2 === 0) {
            return total + currentValue * 2;
        } else {
            return total + currentValue;
        }
    }, 0)
    return arrB;
}
console.log(sumArrAEvenNumberMultiTwo(arrA));