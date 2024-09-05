const values = [200, 500, 1000, 2000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000, 500000000, 1000000000, 2000000000, 4000000000];

values.forEach((element) => {
    console.log(`Value: ${element}, gusses: ${Math.log2(element)}`);
});
