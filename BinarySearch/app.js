const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

function binarySearch(search, values) {
    let min = 0;
    let max = values.length - 1;
    let middel;
    found = false;

    while (!found) {
        middel = min + Math.floor((max - min) / 2);
    }

    function compare(a, b) {
        if (a == b) {
            return 0;
        }
        if (a > b) {
            return -1;
        }

        if (a < b) {
            return 1;
        }
    }
}
