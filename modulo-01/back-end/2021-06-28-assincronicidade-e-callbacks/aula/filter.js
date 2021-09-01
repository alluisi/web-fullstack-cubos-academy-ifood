const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFiltrado = array.filter((x/*, index, array*/) => {
    if (x > 5) {
        return true;
    } else {
        return false;
    }
});

console.log(arrayFiltrado);