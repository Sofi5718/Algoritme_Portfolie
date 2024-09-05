export function binarySearch(search, values, compareFunction) {
    let min = 0;
    let max = values.length - 1;
    let middel;

    const defaultCompare = (a, b) => a - b;
    const compare = compareFunction || defaultCompare;

    while (max >= min) {
        middel = min + Math.floor((max - min) / 2);
        let resault = compare(values[middel], search);
        if (resault === 0) {
            return middel;
        }
        if (resault > 0) {
            max = middel - 1;
        } else {
            min = middel + 1;
        }
    }
    return -1;
}
