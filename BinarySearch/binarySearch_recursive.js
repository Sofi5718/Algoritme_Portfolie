let iterations = 0;

function binarySearchRecursive(search, list, start, end, comparatorfunc) {
    const defaultComparator = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
    const compare = comparatorfunc || defaultComparator;

    iterations++;
    console.group(`Number of iterations: ${iterations}`);

    if (start > end) {
        console.groupEnd();
        return -1;
    }

    const middle = Math.floor((start + end) / 2);
    console.log(`Start: ${start}, Middle: ${middle}, End: ${end}`);

    const comparison = compare(search, list[middle]);

    if (comparison === 0) {
        console.groupEnd();
        return middle;
    }

    if (comparison < 0) {
        return binarySearchRecursive(search, list, start, middle - 1, comparatorfunc);
    }

    return binarySearchRecursive(search, list, middle + 1, end, comparatorfunc);
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 56];
iterations = 0;
let index = binarySearchRecursive(2, list, 0, list.length - 1);
console.log(`Tallet 2 er fundet på index: ${index}, Iterationer: ${iterations}`);
